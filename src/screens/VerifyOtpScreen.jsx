import React, { useRef, useState } from "react";
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
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import useHandleMutation from "../hooks/useHandleMutation";
import { navigate } from "../navigation/NavigationService";
import { useVerifyOtpMutation } from "../redux/api/authApi";
import { saveAuth } from '../utils/authStorage';
import Header from "../components/Login/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function VerifyOtpScreen({ route }) {
  const [verifyOtp] = useVerifyOtpMutation();
  const handleMutation = useHandleMutation();
  const loading = useSelector(state => state.alert.loadingMap.sendOtpLoading);
  const { email } = route.params;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = Array.from({ length: 6 }, () => useRef());

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) refs[index + 1].current.focus();
  };

  return (

    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>




        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={styles.container}>

            {/* Header */}


            <Header HeadingTitle={"Verify OTP"} HeadingText={` OTP sent to ${email}`} Icon={<Icon name="lock" size={28} color="#fff" />} />

            {/* Card */}
            <View style={styles.card}>
              {/* OTP Boxes */}
              <View style={styles.otpRow}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={refs[index]}
                    style={styles.otpInput}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(v) => handleOtpChange(v, index)}
                    value={digit}
                  />
                ))}
              </View>

              {/* Verify Button */}
              <TouchableOpacity style={{ marginTop: 20 }}
                disabled={loading}
                activeOpacity={0.7}
                onPress={
                  async () => {
                    let res = await handleMutation({
                      apiFunc: verifyOtp,
                      params: { otp: otp.join(''), email },
                      label: 'verifyOtpLoading',
                    })

                    if (res.status) {
                      if (res.AuthenticationToken) {
                        await saveAuth(res.AuthenticationToken, res.user);
                      }
                      else {
                        navigate("CompleteProfile", { email })
                      }
                    }




                  }}


              >

                <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.button}>
                  {
                    loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Verify</Text>
                  }

                </LinearGradient>
              </TouchableOpacity>

              {/* Resend */}
              <Text style={styles.resendText}>Resend OTP</Text>

              {/* Info Box */}
              <View style={styles.infoBox}>
                <Icon name="security" size={18} color="#4a90e2" />
                <Text style={styles.infoText}>
                  Enter the 6-digit code sent to your email.
                </Text>
              </View>
            </View>

          </ScrollView>
        </KeyboardAvoidingView>

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
    marginVertical: 20,
    marginHorizontal: 15,
  },

  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  otpInput: {
    width: 45,
    height: 55,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#007BFF",
    textAlign: "center",
    fontSize: 20,
    color: "#111",
    fontFamily: "Roboto-Bold",
    backgroundColor: "#fff",
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

  resendText: {
    textAlign: "center",
    marginTop: 10,
    color: "#4a90e2",
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
