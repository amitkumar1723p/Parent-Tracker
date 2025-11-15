import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { navigate } from "../navigation/NavigationService";

export default function EnterEmailScreen() {
  const [email, setEmail] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
        <LinearGradient
          colors={["#eff6ff", "#f0fdf4"]}
          style={styles.header}
        >
          <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.iconBox}>
            <Icon name="shield" size={28} color="#fff" />
          </LinearGradient>

          <Text style={styles.title}>SafeTracker</Text>
          <Text style={styles.subtitle}>Enter your email to continue</Text>
        </LinearGradient>

        {/* Card */}
        <View style={styles.card}>
          <View style={styles.inputWrapper}>
            <Icon name="email" size={20} color="#aaa" />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigate("VerifyOtp", { email })}
            style={{ marginTop: 15 }}
          >
            <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.button}>
              <Text style={styles.buttonText}>Send OTP</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <Icon name="security" size={18} color="#4a90e2" />
            <Text style={styles.infoText}>
              We'll send a secure 6-digit code to verify your email address.
            </Text>
          </View>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  iconBox: {
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontFamily: "Roboto-Bold",
    color: "#111",
  },

  subtitle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: "#555",
    marginTop: 5,
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 5,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#007BFF",
    paddingHorizontal: 12,
    borderRadius: 12,
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 10,
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    color: "#111",
  },

  button: {
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto-SemiBold",
  },

  infoBox: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "#e8f0ff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  infoText: {
    color: "#4a90e2",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    marginLeft: 8,
  },
});
