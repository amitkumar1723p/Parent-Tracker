



import React, { useRef, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { navigate } from "../../navigation/NavigationService";
import { Onboarding1, Onboarding2, Onboarding3 } from "./components/OnboardingComponent";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const [page, setPage] = useState(0);
  const scrollRef = useRef(null); // 👈 Horizontal ScrollView ka ref

  // Navigate to login when finish
  const onFinish = () => {
    navigate("EnterEmail");
  };

  // Jab horizontal scroll hoga → page index calculate karke set kar dena
  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentPage = Math.round(offsetX / width);
    setPage(currentPage);
  };

  // 👇 Next button press -> programmatically scroll karega
  const onNext = () => {
    if (page < 2) {
      const nextPage = page + 1;
      scrollRef.current?.scrollTo({ x: nextPage * width, animated: true });
      setPage(nextPage);
    }
  };

  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={["#eff6ff", "#f0fdf4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {/* OUTER ScrollView → vertical scroll enable karega */}
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >

 <Text style={[styles.skip]} // safe area ke niche 10 px

    onPress={onFinish}>Skip</Text>

            {/* INNER ScrollView → horizontal swipe pages */}
            <ScrollView
              ref={scrollRef}   // 👈 ref attach kiya
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
            >
              {/* Page 1 */}
              <View style={styles.page}>
                <Onboarding1 onNext={onNext} onFinish={onFinish} />
              </View>

              {/* Page 2 */}
              <View style={styles.page}>
                <Onboarding2 onNext={onNext} onFinish={onFinish} />
              </View>

              {/* Page 3 */}
              <View style={styles.page}>
                <Onboarding3 onFinish={onFinish} />
              </View>
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

   skip: {
 fontFamily:'Roboto-Medium',
  fontSize: 16,
  color: "#007BFF",
  fontWeight: "600",
  alignSelf:'flex-end',
marginRight:10,
marginTop:10,


  },
});
