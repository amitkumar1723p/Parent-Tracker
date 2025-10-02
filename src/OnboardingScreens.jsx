import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import amit from '../assets/images/amit.jpg';

 import banner1 from '../assets/images/banner-1.jpg';
const { width } = Dimensions.get("window");

 const Onboarding1 = ({ onNext, onSkip }) => {
   const insets = useSafeAreaInsets(); // yaha se top padding milega
  <SafeAreaView style={styles.container}>
    <Text style={[styles.skip, { top: insets.top + 10 }]} // safe area ke niche 10 px

    onPress={onSkip}>Skip</Text>

    <Image
      source={banner1} // apna image lagao
      style={styles.image}
      resizeMode="contain"

    />

    <Text style={styles.title}>Track Your Loved Ones</Text>
    <Text style={styles.subtitle}>
      Keep your family safe with real-time location tracking and smart
      notifications
    </Text>

    <View style={styles.dots}>
      <View style={styles.activeDot} />
      <View style={styles.inactiveDot} />
      <View style={styles.inactiveDot} />
    </View>
    <TouchableOpacity onPress={onNext}>
      <LinearGradient
        colors={["#007BFF", "#00C851"]}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </LinearGradient>
    </TouchableOpacity>
  </SafeAreaView>
 }

const Onboarding2 =     ({ onNext, onSkip }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.skip} onPress={onSkip}>Skip</Text>
    <Image
    //   source={amit} // apna image lagao
      source={amit}   // ✅ sahi tarika
      style={styles.image}
      resizeMode="contain"
    />
    <Text style={styles.title}>Smart Geofencing</Text>
    <Text style={styles.subtitle}>
      Set up safe zones and get instant alerts when your family members arrive
      or leave important places
    </Text>
    <View style={styles.dots}>
      <View style={styles.inactiveDot} />
      <View style={styles.activeDot} />
      <View style={styles.inactiveDot} />
    </View>
    <TouchableOpacity onPress={onNext}>
      <LinearGradient
        colors={["#007BFF", "#00C851"]}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </LinearGradient>
    </TouchableOpacity>
  </SafeAreaView>
);

const Onboarding3 = ({ onFinish, onSkip }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.skip} onPress={onSkip}>Skip</Text>
    <Image
      source={amit} // apna image lagao
      style={styles.image}
      resizeMode="contain"
    />
    <Text style={styles.title}>AI-Powered Insights</Text>
    <Text style={styles.subtitle}>
      Get intelligent daily summaries and insights about your family's
      activities and movements
    </Text>
    <View style={styles.dots}>
      <View style={styles.inactiveDot} />
      <View style={styles.inactiveDot} />
      <View style={styles.activeDot} />
    </View>
    <TouchableOpacity onPress={onFinish}>
      <LinearGradient
        colors={["#007BFF", "#00C851"]}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get   Started</Text>
      </LinearGradient>
    </TouchableOpacity>
  </SafeAreaView>
);

export { Onboarding1, Onboarding2, Onboarding3 };

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: "#007BFF",
    borderRadius: 4,
    height: 8,
    margin: 4,
    width: 8,
  },
  button: {
    alignItems: "center",
    borderRadius: 25,
    padding: 12,
    width: width * 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  container: {
    flex: 1,

    // backgroundColor: "#F7FBFF",
    justifyContent: "center",
    alignItems: "center",
    // padding: 20,
    borderBlockColor:'red',
    borderWidth:2
  },
  dots: {
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    width: width * 0.8,
    // height: width * 0.5,
    marginVertical: 20,
      backgroundColor: "#fff",
    borderRadius: 12,


    // iOS Shadow
    shadowColor: "black",              // shadow ka color
    shadowOffset: { width: 0, height: 0 }, // 0,0 = har taraf equal
    shadowOpacity: 0.25,               // halka/gaadha
    shadowRadius: 6,                   // blur

    // Android Shadow
    elevation: 6,

  },
  inactiveDot: {
    backgroundColor: "#CCC",
    borderRadius: 4,
    height: 8,
    margin: 4,
    width: 8,
  },
  skip: {
 position: "absolute",   // top-right me fix karne ke liye
               // distance from top
  right: 20,              // distance from right
  fontSize: 16,
  color: "#007BFF",
  fontWeight: "600",
  },
  subtitle: {
    color: "#555",
    fontSize: 14,
    marginBottom: 25,
    paddingHorizontal: 15,
    textAlign: "center",
  },
  title: {
    color: "#222",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
});
