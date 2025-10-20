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
import LinearGradient from "react-native-linear-gradient";
// import Icon from "react-native-vector-icons/Ionicons";
// import Clipboard from "@react-native-clipboard/clipboard";
// import QRCode from "react-native-qrcode-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate,goBack  } from "../navigation/NavigationService";
const AddInviteScreen = () => {
  // inviteCode can come from params or be generated
//   const inviteCode = route?.params?.inviteCode ?? "431UZS8VQ";
  const inviteCode =   "431UZS8VQ";
  const qrRef = useRef(null);

  const showToast = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert("", message);
    }
  };

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
    showToast("Copied to clipboard");
  };

  const handleSms = async () => {
    const body = `Use this code to connect: ${inviteCode}`;
    // sms URL differs by platform
    const url = Platform.OS === "ios"
      ? `sms:&body=${encodeURIComponent(body)}`
      : `sms:?body=${encodeURIComponent(body)}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        Linking.openURL(url);
      } else {
        showToast("No SMS app available");
      }
    } catch (err) {
      showToast("Could not open SMS app");
    }
  };

  const handleDone = () => {
    //  goBack();
     navigate('parent-dashboard')
  };

  return (
    <SafeAreaView style={styles.safe}>
   <ScrollView  showsVerticalScrollIndicator={false}
    // contentContainerStyle ={{flex:1}}

    >





      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() =>   goBack()}>
          <Icon name="arrow-back-outline" size={22} color="#222" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Child</Text>

        <View style={styles.headerIcons}>
          <Icon name="notifications-outline" size={20} color="#222" style={{ marginRight: 12 }} />
          <Icon name="settings-outline" size={20} color="#222" />
        </View>
      </View> */}

      {/* Top icon card */}
      <View style={styles.topIconWrap}>
        <LinearGradient colors={["#EAF8FF", "#E9FBEF"]} style={styles.topIcon}>
          {/* <Icon name="qr-code-outline" size={28} color="#0DA47A" /> */}
        </LinearGradient>
      </View>

      {/* Title */}
      <Text style={styles.title}>Share Invite Code</Text>
      <Text style={styles.subtitle}>Send this code to your child to connect their device</Text>

      {/* Invite Code Card */}
      <View style={styles.card}>
        <Text style={styles.smallLabel}>Invite Code</Text>
        <Text selectable style={styles.inviteCode}>{inviteCode}</Text>

        <TouchableOpacity
        // onPress={() => copyToClipboard(inviteCode)}

        >
          <Text style={styles.tapCopy}>Tap to copy</Text>
        </TouchableOpacity>
      </View>

      {/* QR Card */}
      <View style={[styles.card, { marginTop: 18 }]}>
        <Text style={styles.smallLabelCenter}>Or scan QR code</Text>

        <View style={styles.qrHolder}>
          <View style={styles.qrBox}>
            <Text style={{fontFamily:"Roboto-Regular" ,}}>OrCode</Text>
            {/* <QRCode
              value={inviteCode}
              size={120}
              getRef={qrRef}
            /> */}
          </View>
        </View>
      </View>

      {/* Share options */}
      <Text style={styles.shareLabel}>Share via:</Text>
      <View style={styles.shareRow}>
        <TouchableOpacity style={styles.shareItem} onPress={handleSms}>
          <View style={styles.iconCircle}>
            {/* <Icon name="chatbubble-outline" size={20} color="#1AA67A" /> */}
          </View>
          <Text style={styles.shareText}>Text{"\n"}Message</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareItem} onPress={() => copyToClipboard(inviteCode)}>
          <View style={styles.iconCircle}>
            {/* <Icon name="copy-outline" size={20} color="#6D9CFF" /> */}
          </View>
          <Text style={styles.shareText}>Copy{"\n"}Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareItem} onPress={() => {
          // fallback share (clipboard + toast)
          copyToClipboard(inviteCode);
          showToast("Invite code copied — paste anywhere");
        }}>
          <View style={styles.iconCircle}>
            {/* <Icon name="share-social-outline" size={20} color="#FF9AA2" /> */}
          </View>
          <Text style={styles.shareText}>More</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom button */}
      <View style={styles.bottomWrap}>
        <TouchableOpacity style={{ width: "100%" }} onPress={handleDone}>
          <LinearGradient colors={["#4A90E2", "#40C78B"]} style={styles.doneButton}>
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
    fontFamily:"Roboto-SemiBold" ,
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
    fontFamily:"Roboto-Bold" ,
    marginTop: 12,
    color: "#0B2340",
  },
  subtitle: {
    textAlign: "center",
    color: "#6C7A89",
    marginTop: 6,
    marginBottom: 18,
    fontSize: 13,
    fontFamily:"Roboto-Regular" ,
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
    fontFamily:"Roboto-Regular" ,
  },
  smallLabelCenter: {
    textAlign: "center",
    color: "#9AA3AD",
    fontSize: 13,
    marginBottom: 12,
    fontFamily:"Roboto-Regular" ,
  },
  inviteCode: {
    textAlign: "center",
    fontSize: 28,
    // fontWeight: "800",
    fontFamily:"Roboto-Bold" ,
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
    fontFamily:"Roboto-Regular" ,
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
    fontFamily:"Roboto-SemiBold" ,
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
fontFamily:"Roboto-Regular" ,

  },
  bottomWrap: {
    marginTop: "auto",
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
    fontFamily:"Roboto-Bold" ,
  },
});
