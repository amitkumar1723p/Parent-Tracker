import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate,goBack  } from "../navigation/NavigationService";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import Feather from "react-native-vector-icons/Feather";

export default function ConnectToParentScreen({}) {
  const [code, setCode] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => goBack()}>
          {/* <MaterialIcons name="arrow-back-ios" size={22} color="#222" /> */}
        </TouchableOpacity>
        <Text style={styles.topTitle}>Connect to Parent</Text>
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            {/* <Feather name="help-circle" size={20} color="#444" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            {/* <AntDesign name="qrcode" size={20} color="#444" /> */}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Illustration */}
        <View style={styles.illustration}>
          <LinearGradient
            colors={["#E9F6FF", "#ECFFF7"]}
            style={styles.illustrationCircle}
          >
            {/* <MaterialIcons name="family-restroom" size={50} color="#00A676" /> */}
          </LinearGradient>
        </View>

        {/* Heading */}
        <Text style={styles.heading}>Connect to Your Parent</Text>
        <Text style={styles.subheading}>
          Enter the invite code or scan the QR code shared by your parent to
          connect safely
        </Text>

        {/* Invite Code Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Parent's Invite Code</Text>
          <TextInput
            value={code}
            onChangeText={setCode}
            placeholder="Enter 6-digit code"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="numeric"
            maxLength={6}
          />
          <Text style={styles.inputHint}>
            Ask your parent to share their invite code with you
          </Text>

          <TouchableOpacity activeOpacity={0.9} style={{ marginTop: 14 }} onPress={()=>{navigate('parent-child-connect')}}>
            <LinearGradient
              colors={["#007BFF", "#00C851"]}
              style={styles.connectBtn}
            >
              <Text style={styles.connectText}>Connect Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.dividerWrap}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* QR Code Card */}
        <View style={styles.card}>
          <View style={styles.qrIconWrap}>
            {/* <AntDesign name="qrcode" size={28} color="#4A90FF" /> */}
          </View>
          <Text style={styles.cardTitle}>Scan QR Code</Text>
          <Text style={styles.cardDesc}>
            Use your camera to scan the QR code from your parent's SafeTracker
            app
          </Text>

          <TouchableOpacity
            activeOpacity={0.9}
            style={{ marginTop: 14, alignSelf: "center" }}
          >
            <View style={styles.qrBtn}>
              {/* <Feather name="camera" size={18} color="#222" /> */}
              <Text style={styles.qrBtnText}>Open Camera Scanner</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Help Section */}
        <View style={styles.helpBox}>
          {/* <MaterialIcons name="info-outline" size={16} color="#007BFF" /> */}
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text style={styles.helpTitle}>Need Help?</Text>
            <Text style={styles.helpText}>
              Ask your parent to open SafeTracker, go to "Add Child", and show
              you the invite code or QR code on their screen.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F9FAFB" },

  /* Top Bar */
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  topTitle: { flex: 1, fontSize: 16, fontWeight: "600", color: "#111" },
  topIcons: { flexDirection: "row" },
  iconBtn: { marginLeft: 14 },

  /* Illustration */
  illustration: { alignItems: "center", marginTop: 20 },
  illustrationCircle: {
    width: 90,
    height: 90,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  /* Headings */
  heading: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "#111",
  },
  subheading: {
    marginTop: 6,
    fontSize: 13,
    textAlign: "center",
    color: "#555",
    lineHeight: 18,
    paddingHorizontal: 20,
  },

  /* Cards */
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardLabel: { fontSize: 13, color: "#333", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#111",
  },
  inputHint: { fontSize: 11, color: "#777", marginTop: 6 },
  connectBtn: {
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: "center",
  },
  connectText: { color: "#fff", fontWeight: "600", fontSize: 15 },

  /* Divider */
  dividerWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
    marginBottom: 10,
  },
  divider: { flex: 1, height: 1, backgroundColor: "#eee" },
  dividerText: { marginHorizontal: 10, fontSize: 12, color: "#888" },

  /* QR Section */
  qrIconWrap: {
    alignSelf: "center",
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#f0f6ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111",
    textAlign: "center",
  },
  cardDesc: {
    marginTop: 6,
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    lineHeight: 18,
  },
  qrBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F7FA",
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  qrBtnText: { marginLeft: 8, fontSize: 13, fontWeight: "600", color: "#111" },

  /* Help */
  helpBox: {
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#f3f8ff",
    borderRadius: 12,
    padding: 12,
  },
  helpTitle: { fontSize: 13, fontWeight: "700", color: "#007BFF" },
  helpText: { fontSize: 12, color: "#444", marginTop: 2, lineHeight: 17 },
});
