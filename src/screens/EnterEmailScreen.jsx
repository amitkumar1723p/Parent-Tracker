import React, { useState, useEffect } from "react"; // ⭐ ADDED
import {
  ActivityIndicator,
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
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { GoogleSignin } from '@react-native-google-signin/google-signin'; // ⭐ ADDED
import { useSelector } from "react-redux";
import useHandleMutation from "../hooks/useHandleMutation";
import { navigate } from "../navigation/NavigationService";
import { useSendOtpMutation } from "../redux/api/authApi";
import Header from '../components/Login/Header'

export default function EnterEmailScreen() {
  const [email, setEmail] = useState("");
  const [sendOtp] = useSendOtpMutation();
  const handleMutation = useHandleMutation();
  const insets = useSafeAreaInsets();
  const loading = useSelector(state => state.alert.loadingMap.sendOtpLoading);

  const [userData, setUserData] = useState(null); // ⭐ ADDED

  // ⭐ Google Init
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '243310166105-39bjnquqcdi7ccccfi1b3ll2bkta8los.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  // ⭐ Google Login Function
  const continueWithGoogle = async () => {
    try {
      await GoogleSignin.signOut();
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("Google User Info:", userInfo);
      setUserData(userInfo);

      // TODO: Send token to backend if needed
      // navigate("home")
    } catch (error) {
      console.log("Google Signin Error:", error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={[{ paddingBottom: insets.bottom + 20 }]}
            showsVerticalScrollIndicator={false}
          >

            {/* Header */}
            <Header
              HeadingTitle={"SafeTracker"}
              HeadingText={"Enter your email to continue"}
              Icon={<Icon name="shield" size={28} color="#fff" />}
            />

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
                disabled={loading || !email}
                onPress={
                  async () => {
                    let res = await handleMutation({
                      apiFunc: sendOtp,
                      params: { email },
                      label: "sendOtpLoading",
                    });
                    if (res.status) {
                      navigate("VerifyOtp", { email });
                    }
                  }}
                style={{ marginTop: 15 }}
                activeOpacity={0.7}
              >
                <LinearGradient
                  colors={["#007BFF", "#00C851"]}
                  style={[styles.button, (loading || !email) && { opacity: 0.6 }]}
                >
                  {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                  ) : (
                    <Text style={styles.buttonText}>Send OTP</Text>
                  )}
                </LinearGradient>
              </TouchableOpacity>

              {/* Info Box */}
              <View style={styles.infoBox}>
                <Icon name="security" size={18} color="#4a90e2" />
                <Text style={styles.infoText}>
                  We'll send a secure 6-digit code to verify your email address.
                </Text>
              </View>

              {/* ⭐ Google Button Added */}
              <TouchableOpacity
                style={styles.googleButton}
                onPress={continueWithGoogle}
              >
                <Icon name="google" size={20} color="#DB4437" />
                <Text style={styles.googleButtonText}>Continue with Google</Text>
              </TouchableOpacity>
              {/* ⭐ END */}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// ⭐ Styles Added for Google Button
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9FAFB",
  },
  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    elevation: 5,
    marginVertical: 20,
    marginHorizontal: 15,
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
    marginLeft: 8,
    paddingRight: 15,
  },

  // ⭐ New Google Button Style
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    marginTop: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "Roboto-SemiBold",
    color: "#111",
  },
});
