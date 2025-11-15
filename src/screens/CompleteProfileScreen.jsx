import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import { replace } from "../navigation/NavigationService";

export default function CompleteProfileScreen({ route }) {
  const { email } = route.params;

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <LinearGradient colors={["#eff6ff", "#f0fdf4"]} style={styles.header}>
        <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.logo}>
          <Icon name="person" size={28} color="#fff" />
        </LinearGradient>

        <Text style={styles.title}>Complete Your Profile</Text>
        <Text style={styles.subtitle}>Email: {email}</Text>
      </LinearGradient>

      <View style={styles.form}>
        {/* Name */}
        <View style={styles.inputWrapper}>
          <Icon name="person" size={20} color="#aaa" />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaa"
            onChangeText={(v) => setUserData({ ...userData, name: v })}
          />
        </View>

        {/* Phone */}
        <View style={styles.inputWrapper}>
          <Icon name="phone" size={20} color="#aaa" />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            onChangeText={(v) => setUserData({ ...userData, phone: v })}
          />
        </View>

        {/* Continue */}
        <TouchableOpacity
          onPress={() => replace("Home")} // After signup → redirect to home
          style={{ marginTop: 20 }}
        >
          <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.button}>
            <Text style={styles.buttonText}>Complete Profile</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  form: { paddingHorizontal: 20, marginTop: 30 },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 15,
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
