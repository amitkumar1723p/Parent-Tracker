import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { navigate } from "../navigation/NavigationService";

const { height } = Dimensions.get("window");

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <SafeAreaView  style={styles.container}>
      <ScrollView
        contentContainerStyle={[

          { paddingBottom: insets.bottom + 20 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with Gradient */}
        <LinearGradient
          style={[
            styles.header,
            // {
            //   paddingTop: insets.top + 40, // responsive top padding (status bar safe)
            // },
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#eff6ff", "#f0fdf4"]}
        >
          <LinearGradient
            colors={["#007BFF", "#00C851"]}
            style={styles.logoContainer}
          />
          <Text style={styles.title}>SafeTracker</Text>





{/* fontFamily: 'Poppins-Regular',
  fontSize: 14,
  color: '#000000', */}
           <View>
    {/* <Text  style={{fontFamily:"Poppins-Bold" ,marginBottom:50}}>hello</Text> */}
  </View>
          <Text style={styles.subtitle}>
            Keep your family safe and connected
          </Text>
        </LinearGradient>

        {/* Content Section */}
        <View style={styles.content}>
          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, isLogin && styles.activeTab]}
              onPress={() => setIsLogin(true)}
            >
              <Text style={[styles.tabText, isLogin && styles.activeTabText]}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, !isLogin && styles.activeTab]}
              onPress={() => setIsLogin(false)}
            >
              <Text style={[styles.tabText, !isLogin && styles.activeTabText]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form Inputs */}
          <View style={styles.form}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#aaa"
              />
            </View>

            {!isLogin && (
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm password"
                  secureTextEntry
                  placeholderTextColor="#aaa"
                />
              </View>
            )}

            {/* Gradient Button */}
            <TouchableOpacity
              style={{ marginTop: 20 }}
              onPress={() => navigate("role-selector")}
            >
              <LinearGradient
                colors={["#007BFF", "#00C851"]}
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  {isLogin ? "Login" : "Create Account"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.divider} />
          </View>

          {/* Google Button */}
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 25,
    minHeight: 250, // ensures header gradient visible even in split view
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
     fontFamily:"Roboto-Bold" ,
    fontSize: 24,
    // fontWeight: "700",
    color: "#111",
  },
  subtitle: {
    fontFamily:"Roboto-Regular",
    fontSize: 13,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    padding: 3,
    alignSelf: "center",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#fff",
    elevation: 3,
  },
  tabText: {
    fontFamily:"Roboto-SemiBold",
    fontSize: 14,
    // fontWeight: "600",
    color: "#555",
  },
  activeTabText: {
    color: "#111",
  },
  form: {
    width: "100%",
    marginTop: 25,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#eee",
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 10,
    color: "#111",


  fontFamily:"Roboto-Regular"

  },
  button: {
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily:"Roboto-SemiBold" ,
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    fontFamily:"Roboto-Regular",
    color: "#888",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    alignSelf: "center",
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily:"Roboto-SemiBold" ,
    // fontWeight: "600",
    color: "#111",
  },
});
