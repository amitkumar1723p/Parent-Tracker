// import { View, Text } from 'react-native'
// import React from 'react'

// const Login = () => {
//   return (
//     <View>
//       <Text>Login</Text>
//     </View>
//   )
// }

// export default Login


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,

} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import AntDesign from "react-native-vector-icons/AntDesign";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.header}>
        <LinearGradient
          colors={["#007BFF", "#00C851"]}
          style={styles.logoContainer}
        >
          {/* <Icon name="location-pin" size={28} color="white" /> */}
        </LinearGradient>
        <Text style={styles.title}>SafeTracker</Text>
        <Text style={styles.subtitle}>
          Keep your family safe and connected
        </Text>
      </View>

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
          {/* <Icon name="email" size={20} color="#aaa" /> */}
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor="#aaa"
          />
        </View>
        <View style={styles.inputWrapper}>
          {/* <Icon name="phone" size={20} color="#aaa" /> */}
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="#aaa"
          />
        </View>
        <View style={styles.inputWrapper}>
          {/* <Icon name="lock" size={20} color="#aaa" /> */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#aaa"
          />
        </View>

        {!isLogin && (
          <View style={styles.inputWrapper}>
            {/* <Icon name="lock" size={20} color="#aaa" /> */}
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              secureTextEntry
              placeholderTextColor="#aaa"
            />
          </View>
        )}

        {/* Gradient Button */}
        <TouchableOpacity style={{ marginTop: 20 }}>
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
        {/* <AntDesign name="google" size={20} color="#000" /> */}
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
    paddingHorizontal: 20,
backgroundColor:"green"

  },
  header: {
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "red",
    width : '100%'

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
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },
  subtitle: {
    fontSize: 13,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    padding: 3,
     backgroundColor :"green"
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#fff",
    elevation: 3,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
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
  },
  button: {
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
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
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
  },
});
