import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  ToastAndroid,
  Linking,
  ScrollView,
} from "react-native";

// Clipboard for copying invite code
import Clipboard from "@react-native-clipboard/clipboard";

// Share sheet for sharing on WhatsApp, Instagram, Gmail etc.
import Share from "react-native-share";

// QR Code component for showing QR
import QRCode from "react-native-qrcode-svg";

// Gradient Button UI
import LinearGradient from "react-native-linear-gradient";

// Icons for UI
import Icon from "react-native-vector-icons/Ionicons";

// Safe UI area to avoid notch/camera
import { SafeAreaView } from "react-native-safe-area-context";

// Navigate to dashboard
import { navigate } from "../navigation/NavigationService";

const AddInviteScreen = () => {

  // Temporary invite code (future: fetch from backend)
  const inviteCode = "431UZS8VQ";

  // Reference for QR code for saving/sharing later
  const qrRef = useRef(null);

  // Toast for Android & Alert for iOS — reuse function
  const showToast = (msg) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      Alert.alert("", msg);
    }
  };

  // Copy invite code to clipboard
  const copyToClipboard = () => {
    Clipboard.setString(inviteCode);
    showToast("Invite code copied");
  };

  // Open SMS app with pre-filled message body
  const handleSms = async () => {
    const body = `Hey! Use this code to connect with me: ${inviteCode}`;

    // iOS & Android URLs are different
    const url =
      Platform.OS === "ios"
        ? `sms:&body=${encodeURIComponent(body)}`
        : `sms:?body=${encodeURIComponent(body)}`;

    // Check SMS app available
    const supported = await Linking.canOpenURL(url);

    supported ? Linking.openURL(url) : showToast("No SMS app available");
  };

  // Direct WhatsApp send intent
  const handleWhatsApp = async () => {
    const message = `Use this code to connect: ${inviteCode}`;
    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;

    // Check WhatsApp installed?
    const supported = await Linking.canOpenURL(url);

    supported ? Linking.openURL(url) : showToast("WhatsApp not installed");
  };

  // System share — opens Instagram, Gmail, Messenger etc. — automatically
  const handleShare = async () => {
    try {
      await Share.open({
        message: `Connect using this code: ${inviteCode}`,
      });
    } catch (e) {
      console.log("Share cancelled");
    }
  };

  // After sharing completed → Move to Parent Dashboard
  const handleDone = () => navigate("parent-dashboard");

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top Icon */}
        <View style={styles.topIconWrap}>
          <LinearGradient colors={["#EAF8FF", "#E9FBEF"]} style={styles.topIcon}>
            <Icon name="qr-code-outline" size={28} color="#0DA47A" />
          </LinearGradient>
        </View>

        {/* Page Title */}
        <Text style={styles.title}>Share Invite Code</Text>
        <Text style={styles.subtitle}>
          Send this code to your child to connect their device
        </Text>

        {/* Invite Code Card */}
        <View style={styles.card}>
          <Text style={styles.smallLabel}>Invite Code</Text>

          {/* Display Code */}
          <Text selectable style={styles.inviteCode}>
            {inviteCode}
          </Text>

          {/* Tap to copy */}
          <TouchableOpacity onPress={copyToClipboard}>
            <Text style={styles.tapCopy}>Tap to copy</Text>
          </TouchableOpacity>
        </View>

        {/* QR Code Card */}
        <View style={[styles.card, { marginTop: 18 }]}>
          <Text style={styles.smallLabelCenter}>Or scan QR code</Text>

          {/* QR Code */}
          <View style={styles.qrHolder}>
            <View style={styles.qrBox}>
              <QRCode value={inviteCode} size={150} getRef={qrRef} />
            </View>
          </View>
        </View>

        {/* Share Options */}
        <Text style={styles.shareLabel}>Share via:</Text>
        <View style={styles.shareRow}>

          {/* SMS */}
          <TouchableOpacity style={styles.shareItem} onPress={handleSms}>
            <View style={styles.iconCircle}>
              <Icon name="chatbubble-outline" size={20} color="#1AA67A" />
            </View>
            <Text style={styles.shareText}>Text{"\n"}Message</Text>
          </TouchableOpacity>

          {/* Copy */}
          <TouchableOpacity style={styles.shareItem} onPress={copyToClipboard}>
            <View style={styles.iconCircle}>
              <Icon name="copy-outline" size={20} color="#6D9CFF" />
            </View>
            <Text style={styles.shareText}>Copy{"\n"}Code</Text>
          </TouchableOpacity>

          {/* WhatsApp */}
          <TouchableOpacity style={styles.shareItem} onPress={handleWhatsApp}>
            <View style={styles.iconCircle}>
              <Icon name="logo-whatsapp" size={20} color="#1BD741" />
            </View>
            <Text style={styles.shareText}>WhatsApp</Text>
          </TouchableOpacity>

          {/* More share apps */}
          <TouchableOpacity style={styles.shareItem} onPress={handleShare}>
            <View style={styles.iconCircle}>
              <Icon name="share-social-outline" size={20} color="#FF9AA2" />
            </View>
            <Text style={styles.shareText}>More</Text>
          </TouchableOpacity>
        </View>

        {/* Done / Continue button */}
        <View style={styles.bottomWrap}>
          <TouchableOpacity style={{ width: "100%" }} onPress={handleDone}>
            <LinearGradient
              colors={["#4A90E2", "#40C78B"]}
              style={styles.doneButton}
            >
              <Text style={styles.doneText}>Done</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default AddInviteScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 18,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 16,
    // fontWeight: "600",
    fontFamily: "Roboto-SemiBold",
    color: "#222",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  topIconWrap: {
    alignItems: "center",
    marginTop: 6,
  },
  topIcon: {
    width: 70,
    height: 70,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    // fontWeight: "700",
    fontFamily: "Roboto-Bold",
    marginTop: 12,
    color: "#0B2340",
  },
  subtitle: {
    textAlign: "center",
    color: "#6C7A89",
    marginTop: 6,
    marginBottom: 18,
    fontSize: 13,
    fontFamily: "Roboto-Regular",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 2,
  },
  smallLabel: {
    textAlign: "center",
    color: "#9AA3AD",
    fontSize: 13,
    marginBottom: 8,
    fontFamily: "Roboto-Regular",
  },
  smallLabelCenter: {
    textAlign: "center",
    color: "#9AA3AD",
    fontSize: 13,
    marginBottom: 12,
    fontFamily: "Roboto-Regular",
  },
  inviteCode: {
    textAlign: "center",
    fontSize: 28,
    // fontWeight: "800",
    fontFamily: "Roboto-Bold",
    // fontFamily:"Roboto-ExtraBold" ,

    letterSpacing: 1.5,
    color: "#14202B",
    marginBottom: 8,
  },
  tapCopy: {
    textAlign: "center",
    color: "#2E6BFF",
    fontSize: 13,
    marginTop: 4,
    fontFamily: "Roboto-Regular",
  },
  qrHolder: {
    alignItems: "center",
  },
  qrBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    // subtle inner shadow feel
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 1,
  },
  shareLabel: {
    marginTop: 18,
    color: "#334155",
    // fontWeight: "600",
    fontFamily: "Roboto-SemiBold",
    marginBottom: 10,
  },
  shareRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    // wrap on small screens
    flexWrap: "wrap",
  },
  shareItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    width: "31%",
    // shadow for card
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 10,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FFFA",
    marginRight: 8,
  },
  shareText: {
    fontSize: 12,
    color: "#334155",
    fontFamily: "Roboto-Regular",

  },
  bottomWrap: {
    marginTop: 19,
    marginBottom: 18,
  },
  doneButton: {
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  doneText: {
    color: "#fff",
    // fontWeight: "700",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
  },
});
