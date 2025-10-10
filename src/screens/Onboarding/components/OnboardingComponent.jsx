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

//  import banner1 from '../../assets/images/banner-1.jpg'
//  import banner2 from '../../assets/images/banner-2.jpg'
//  import banner3 from '../../assets/images/banner-3.jpg'
 import banner1 from '../images/banner-1.jpg'
 import banner2 from '../images/banner-2.jpg'
 import banner3 from '../images/banner-3.jpg'


const { width } = Dimensions.get("window");


 const Onboarding1 = ({ onNext, onFinish }) => {
 const insets = useSafeAreaInsets(); // yaha se top padding milega

  return <>


    <Text style={[styles.skip]} // safe area ke niche 10 px

    onPress={onFinish}>Skip</Text>


 <View style={{flex:1 ,  justifyContent:'center' ,alignItems:'center'}}>


    <Image
      source={banner1} // apna image lagao
      style={styles.image}
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
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </LinearGradient>
    </TouchableOpacity>

</View>


  </>




 }

const Onboarding2 =     ({ onNext, onFinish }) =>  {


   const insets = useSafeAreaInsets(); // yaha se top padding milega
   return ( < >
    <Text style={[styles.skip]} // safe area ke niche 10 px

    onPress={onFinish}>Skip</Text>
 <View style={{flex:1 , justifyContent:'center' ,alignItems:'center'}}>
 <Image
    //   source={amit} // apna image lagao
      source={banner2}   // ✅ sahi tarika
      style={styles.image}

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
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </LinearGradient>
    </TouchableOpacity>

</View>
  </>)

}

const Onboarding3 = ({ onFinish, onSkip }) =>  {
   const insets = useSafeAreaInsets(); // yaha se top padding milega

  return (
 <>
     <Text style={[styles.skip]} // safe area ke niche 10 px

    onPress={onFinish}>Skip</Text>

 <View style={{flex:1 ,  justifyContent:'center' ,alignItems:'center'}}>
    <Image
      source={banner3} // apna image lagao
      style={styles.image}
      // resizeMode=""
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

     <TouchableOpacity onPress={ onFinish} activeOpacity={0.8}>
      <LinearGradient
        colors={["#007BFF", "#00C851"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </LinearGradient>
    </TouchableOpacity>
    </View>
  </>
  )

}

export { Onboarding1, Onboarding2, Onboarding3 };

const styles = StyleSheet.create({


  activeDot: {
    backgroundColor: "#007BFF",
    borderRadius: 4,
    height: 8,
    margin: 4,
    width: 8,
  },


  dots: {
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
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

  fontSize: 16,
  color: "#007BFF",
  fontWeight: "600",
  alignSelf:'flex-end'

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


  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, // Android shadow
     width: width * 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },


  // button: {
  //   alignItems: "center",
  //   borderRadius: 25,
  //   padding: 12,
  //   width: width * 0.6,
  // },
  // buttonText: {
  //   color: "#fff",
  //   fontSize: 16,
  //   fontWeight: "600",
  // },
});
