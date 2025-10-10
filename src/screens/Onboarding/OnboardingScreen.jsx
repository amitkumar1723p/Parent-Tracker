

//  import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
// import React, { useState } from "react";
// import { Onboarding1, Onboarding2, Onboarding3 } from "./components/OnboardingComponent";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import LinearGradient from "react-native-linear-gradient";
// import { navigate } from "../../navigation/NavigationService";

// const { width, height } = Dimensions.get("window");

// const OnboardingScreen = () => {
//   const [page, setPage] = useState(0);

//   // Navigate to login when finish
//   const onFinish = () => {
//     navigate("login");
//   };

//   // Jab horizontal scroll hoga → page index calculate karke set kar dena
//   const handleScroll = (event) => {
//     // const offsetX = event.nativeEvent.contentOffset.x; // horizontal offset
//     // const currentPage = Math.round(offsetX / width);   // current page index
//     // setPage(currentPage);
//   };
//    const onNext =()=>{
// // setPage(page +1)
//  }

//   return (
//     <SafeAreaProvider>
//       <LinearGradient
//         colors={["#eff6ff", "#f0fdf4"]}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//         style={{ flex: 1 }}
//       >
//         <SafeAreaView style={{ flex: 1 }}>
//           {/* OUTER ScrollView → vertical scroll enable karega */}
//           <ScrollView
//             contentContainerStyle={{ flexGrow: 1 }}
//             showsVerticalScrollIndicator={false}
//           >
//             {/* INNER ScrollView → horizontal swipe pages */}
//             <ScrollView
//               horizontal
//               pagingEnabled
//               showsHorizontalScrollIndicator={false}
//               onScroll={handleScroll}   // sirf horizontal scroll pe trigger hoga
//               scrollEventThrottle={16}  // fast updates for smooth experience
//             >
//               {/* Page 1 */}
//               <View style={styles.page}>
//                 <Onboarding1 onNext={onNext} onFinish={onFinish} />
//               </View>

//               {/* Page 2 */}
//               <View style={styles.page}>
//                 <Onboarding2 onNext={onNext} onFinish={onFinish} />
//               </View>

//               {/* Page 3 */}
//               <View style={styles.page}>
//                 <Onboarding3 onFinish={onFinish} />
//               </View>
//             </ScrollView>




//           </ScrollView>
//         </SafeAreaView>
//       </LinearGradient>
//     </SafeAreaProvider>
//   );
// };

// export default OnboardingScreen;

// const styles = StyleSheet.create({
//   page: {
//     width: width,             // full screen width for paging
//     // height: height * 0.7,     // thoda height set kiya (vertical scroll ke liye niche jagah bachi rahe)
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//     backgroundColor:'red'
//   },
//   dotsRow: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 16,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
// });




import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import { Onboarding1, Onboarding2, Onboarding3 } from "./components/OnboardingComponent";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import { navigate } from "../../navigation/NavigationService";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const [page, setPage] = useState(0);
  const scrollRef = useRef(null); // 👈 Horizontal ScrollView ka ref

  // Navigate to login when finish
  const onFinish = () => {
    navigate("login");
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
});
