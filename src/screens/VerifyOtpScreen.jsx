import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { navigate } from "../navigation/NavigationService";

export default function VerifyOtpScreen({ route }) {
  const { email } = route.params;
  const [otp, setOtp] = useState("");

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
          <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.logo}>
            <Icon name="lock" size={28} color="#fff" />
          </LinearGradient>

          <Text style={styles.title}>Verify OTP</Text>
          <Text style={styles.subtitle}>OTP sent to: {email}</Text>
        </LinearGradient>

        {/* OTP Input */}
        <View style={styles.content}>
          <View style={styles.inputWrapper}>
            <Icon name="vpn-key" size={20} color="#aaa" />
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              placeholderTextColor="#aaa"
              keyboardType="numeric"
              onChangeText={(text) => setOtp(text)}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigate("CompleteProfile", { email })}
            style={{ marginTop: 20 }}
          >
            <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.button}>
              <Text style={styles.buttonText}>Verify</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = {
  container: { flexGrow: 1, backgroundColor: "#F9FAFB" },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    color: "#111",
  },
  subtitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#555",
    marginTop: 5,
  },
  content: { paddingHorizontal: 20, marginTop: 30 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 10,
    color: "#111",
    fontFamily: "Roboto-Regular",
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
};
