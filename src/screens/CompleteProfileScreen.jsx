// import { useState } from "react";
// import {
//     ScrollView,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View
// } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import { replace } from "../navigation/NavigationService";

// export default function CompleteProfileScreen({ route }) {
//   const { email } = route.params;

//   const [userData, setUserData] = useState({
//     name: "",
//     phone: "",
//   });

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <LinearGradient colors={["#eff6ff", "#f0fdf4"]} style={styles.header}>
//         <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.logo}>
//           <Icon name="person" size={28} color="#fff" />
//         </LinearGradient>

//         <Text style={styles.title}>Complete Your Profile</Text>
//         <Text style={styles.subtitle}>Email: {email}</Text>
//       </LinearGradient>

//       <View style={styles.form}>
//         {/* Name */}
//         <View style={styles.inputWrapper}>
//           <Icon name="person" size={20} color="#aaa" />
//           <TextInput
//             style={styles.input}
//             placeholder="Full Name"
//             placeholderTextColor="#aaa"
//             onChangeText={(v) => setUserData({ ...userData, name: v })}
//           />
//         </View>

//         {/* Phone */}
//         <View style={styles.inputWrapper}>
//           <Icon name="phone" size={20} color="#aaa" />
//           <TextInput
//             style={styles.input}
//             placeholder="Phone Number"
//             placeholderTextColor="#aaa"
//             keyboardType="numeric"
//             onChangeText={(v) => setUserData({ ...userData, phone: v })}
//           />
//         </View>

//         {/* Continue */}
//         <TouchableOpacity
//           onPress={() => replace("Home")} // After signup → redirect to home
//           style={{ marginTop: 20 }}
//         >
//           <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.button}>
//             <Text style={styles.buttonText}>Complete Profile</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = {
//   container: { flexGrow: 1, backgroundColor: "#F9FAFB" },
//   header: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 40,
//   },
//   logo: {
//     width: 60,
//     height: 60,
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   title: {
//     fontFamily: "Roboto-Bold",
//     fontSize: 24,
//     color: "#111",
//   },
//   subtitle: {
//     fontFamily: "Roboto-Regular",
//     fontSize: 13,
//     color: "#555",
//     marginTop: 5,
//   },
//   form: { paddingHorizontal: 20, marginTop: 30 },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: "#eee",
//     marginBottom: 15,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 12,
//     marginLeft: 10,
//     color: "#111",
//     fontFamily: "Roboto-Regular",
//   },
//   button: {
//     paddingVertical: 14,
//     borderRadius: 25,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontFamily: "Roboto-SemiBold",
//   },
// };

import React, { useState } from "react";
import {
  Image, Platform,
  ScrollView, StyleSheet,
  Text, TextInput, TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import BottomSheetModal from "../components/BottomSheetModal";
import useHandleMutation from "../hooks/useHandleMutation";
import { useCompleteProfileMutation } from "../redux/api/authApi";

// ⚠️ OPTIONAL: if you use react-native-image-picker, uncomment and install
// import { launchImageLibrary } from "react-native-image-picker";

const FEATURES = {
  parent: [
    { icon: "group", text: "Track multiple children" },
    { icon: "place", text: "Set up safe zones" },
    { icon: "notifications", text: "Receive instant alerts" },
    { icon: "assessment", text: "View detailed reports" },
  ],
  child: [
    { icon: "location-on", text: "Share location safely" },
    { icon: "add-alert", text: "Emergency SOS button" },
    { icon: "person", text: "Simple profile setup" },
    { icon: "lock", text: "Privacy protection" },
  ],
};

export default function CompleteProfileScreen() {
  const loading = useSelector(
    (s) => s?.alert?.loadingMap?.completeProfileLoading === true
  );

  const [photo, setPhoto] = useState(null);

  const [gender, setGender] = useState(null);
  const [dob, setDob] = useState(null);

  const [genderSheet, setGenderSheet] = useState(false);
  const [dobSheet, setDobSheet] = useState(false);
  const [photoSheet, setPhotoSheet] = useState(false);



const roles = [
  {
    key: "parent",
    label: "Parent",
    icon: "account-group-outline",
    activeColor: "#4A90FF",
    bgColor: "#F7FBFF",
    borderColor: "#161719ff",
  },
  {
    key: "child",
    label: "Child",
    icon: "account-child-outline",
    activeColor: "#00C851",
    bgColor: "#F6FFF9",
    borderColor: "#00C851",
  },
];

  //  Api Call   functions
    const [completeProfile] = useCompleteProfileMutation();
   const handleMutation = useHandleMutation();
     const [userData ,setUserData] = useState({})

  const onPickPhoto = async () => {
    // If image-picker installed:
    // const res = await launchImageLibrary({ mediaType: "photo", selectionLimit: 1 });
    // const uri = res?.assets?.[0]?.uri;
    // if (uri) setPhoto(uri);

    // UI-only fallback (no dep): Set a demo avatar
    setPhoto("https://i.pravatar.cc/200?img=5");
    setPhotoSheet(false);
  };

  const onSelectDob = (d) => {
    setDob(d);
    setDobSheet(false);
  };

  const onSubmit = () => {
    // UI only — add API later
    // validate UI quickly
    // if (!name || !phone || !role) return;
    // replace("Home");
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Soft brand background */}
      <LinearGradient colors={["#F6FBFD", "#EDF9F6"]} style={styles.topBackground} />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <LinearGradient colors={["#7CCBFF", "#6EE2A4"]} style={styles.logo}>
            <MaterialCommunityIcons name="account" size={28} color="#fff" />
          </LinearGradient>
          <Text style={styles.heading}>Complete Your Profile</Text>
          <Text style={styles.subheading}>
            Help us personalize your SafeTracker experience
          </Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          {/* Avatar */}
          <View style={{ alignItems: "center", marginBottom: 12 }}>
            <View style={styles.avatarOuter}>
              <Image
                source={
                  photo
                    ? { uri: photo }
                    : require("../../assets/images/amit.jpg") /* add a 120x120 placeholder in assets */
                }
                style={styles.avatarImg}
              />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setPhotoSheet(true)}
                style={styles.cameraBtn}
              >
                <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.cameraInner}>
                  <MaterialCommunityIcons name="camera" size={16} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <Text style={styles.tapText}>Tap to add photo</Text>
          </View>

 {console.log(userData  ,"userData")}
          {/* Name */}
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons name="account-outline" size={18} color="#9AA7AD" />
          <TextInput
  style={styles.input}
  placeholder="Full Name *"
  placeholderTextColor="#9AA7AD"
  value={userData?.name || ""}
  onChangeText={(text) => setUserData({ ...userData, name: text })}
/>
          </View>

          {/* Phone */}
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons name="phone" size={18} color="#9AA7AD" />
            <TextInput
              style={styles.input}
              placeholder="Phone Number *"
              placeholderTextColor="#9AA7AD"
              keyboardType="phone-pad"

               value={userData?.phone || ""}

               onChangeText={(text) => setUserData({ ...userData, phone: text })}
            />
          </View>

          {/* Role */}
          <Text style={styles.label}>Role *</Text>
          <View style={styles.roleRow}>






{roles.map((item) => (
  <TouchableOpacity
    key={item.key}
    activeOpacity={0.9}
    onPress={() => setUserData({ ...userData, role: item.key })}
    style={[
      styles.roleBox,
      userData.role === item.key && {
        borderColor: item.borderColor,
        backgroundColor: item.bgColor,
      },
    ]}
  >
    <MaterialCommunityIcons
      name={item.icon}
      size={22}
      color={userData.role === item.key ? item.activeColor : "#6B7A86"}
    />

    <Text
      style={[
        styles.roleText,
        userData.role === item.key && { color: "#0B1220", fontFamily: "Roboto-Bold" },
      ]}
    >
      {item.label}
    </Text>

    <View style={styles.roleCheckWrap}>
      {userData.role === item.key ? (
        <View style={[styles.checkCircle, { backgroundColor: item.activeColor }]}>
          <AntDesign name="check" size={12} color="#fff" />
        </View>
      ) : (
        <View style={styles.emptyDot} />
      )}
    </View>
  </TouchableOpacity>
))}









          </View>

          {/* Features box (like your RoleSelector) */}
          {userData?.role && (
            <View style={styles.featuresBox}>
              <Text style={styles.featuresTitle}>
                {userData?.role === "parent" ? "Parent Features" : "Child Features"}
              </Text>
              {FEATURES[userData?.role].map((f, i) => (
                <View key={i} style={styles.featureRow}>
                  <View style={styles.featureIconWrap}>
                    <MaterialIcons
                      name={f.icon}
                      size={18}
                      color={userData?.role === "parent" ? "#4A90FF" : "#00C851"}
                    />
                  </View>
                  <Text style={styles.featureText}>{f.text}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Optional Info */}
          <Text style={[styles.label, { marginTop: 14 }]}>Optional Information</Text>

          {/* Gender (opens bottom sheet) */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setGenderSheet(true)}
            style={styles.inputWrapper}
          >
            <MaterialCommunityIcons name="account" size={18} color="#9AA7AD" />
            <Text
              style={[styles.input, { paddingVertical: 0, color: gender ? "#0B1220" : "#9AA7AD" }]}
              numberOfLines={1}
            >
              {gender || "Select Gender"}
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={20} color="#9AA7AD" />
          </TouchableOpacity>
{/* ------------------------DOB start -------------------------------- */}
          {/* DOB (opens bottom sheet) */}
          {/* <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setDobSheet(true)}
            style={styles.inputWrapper}
          >
            <MaterialCommunityIcons name="calendar-month-outline" size={18} color="#9AA7AD" />
            <Text
              style={[styles.input, { paddingVertical: 0, color: dob ? "#0B1220" : "#9AA7AD" }]}
              numberOfLines={1}
            >
              {dob || "dd-mm-yyyy"}
            </Text>
            <MaterialIcons name="calendar-today" size={18} color="#9AA7AD" />
          </TouchableOpacity> */}
{/* ------------------------------DOB----------------------------- */}
          {/* Button */}
          <TouchableOpacity activeOpacity={0.9} onPress={onSubmit} disabled={loading}>
            <LinearGradient
              colors={["#7CB4FF", "#6EE2A4"]}
              style={[styles.ctaBtn, loading && { opacity: 0.6 }]}
            >
              {loading ? (
                <MaterialCommunityIcons name="loading" size={18} color="#fff" />
              ) : (
                <Text style={styles.ctaText}>Complete Profile</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Privacy Box */}
          <View style={styles.privacyBox}>
            <MaterialCommunityIcons name="shield-check" size={18} color="#00C851" />
            <Text style={styles.privacyText}>
              Your profile information is encrypted and secure. We respect your privacy.
            </Text>
          </View>
        </View>

        <View style={{ height: 36 }} />
      </ScrollView>

      {/* Gender Sheet */}
      <BottomSheetModal
        visible={genderSheet}
        title="Select Gender"
        onClose={() => setGenderSheet(false)}
      >
        {["Male", "Female", "Other"].map((g) => (
          <TouchableOpacity
            key={g}
            activeOpacity={0.9}
            onPress={() => {
              setGender(g);
              setGenderSheet(false);
            }}
            style={styles.sheetRow}
          >
            <Text style={styles.sheetText}>{g}</Text>
            {gender === g && <AntDesign name="checkcircle" size={18} color="#4A90FF" />}
          </TouchableOpacity>
        ))}
      </BottomSheetModal>

      {/* DOB Sheet (UI only; pick a few quick dates)
      <BottomSheetModal visible={dobSheet} title="Select Date of Birth" onClose={() => setDobSheet(false)}>
        {[
          "01-01-2000",
          "15-06-2002",
          "20-10-2005",
          "01-01-2010",
          "Custom…",
        ].map((d) => (
          <TouchableOpacity
            key={d}
            activeOpacity={0.9}
            onPress={() => {
              if (d === "Custom…") {
                // Add your native DateTimePicker here later
                // For now just close
                setDobSheet(false);
              } else {
                onSelectDob(d);
              }
            }}
            style={styles.sheetRow}
          >
            <Text style={styles.sheetText}>{d}</Text>
            {dob === d && <AntDesign name="checkcircle" size={18} color="#4A90FF" />}
          </TouchableOpacity>
        ))}
      </BottomSheetModal> */}

      {/* Photo Sheet */}
      <BottomSheetModal visible={photoSheet} title="Profile Photo" onClose={() => setPhotoSheet(false)}>
        <TouchableOpacity activeOpacity={0.9} onPress={onPickPhoto} style={styles.sheetRow}>
          <MaterialCommunityIcons name="image-multiple" size={18} color="#4A90FF" />
          <Text style={[styles.sheetText, { marginLeft: 8 }]}>Choose from gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setPhoto(null)}
          style={styles.sheetRow}
        >
          <MaterialCommunityIcons name="delete-outline" size={18} color="#E45858" />
          <Text style={[styles.sheetText, { marginLeft: 8, color: "#E45858" }]}>
            Remove photo
          </Text>
        </TouchableOpacity>
      </BottomSheetModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F2F7F7" },
  topBackground: { position: "absolute", left: 0, right: 0, height: 260 },
  scroll: { paddingHorizontal: 20, paddingTop: 18 },
  header: { alignItems: "center", marginBottom: 12 },
  logo: {
    width: 60, height: 60, borderRadius: 14, justifyContent: "center", alignItems: "center",
    marginTop: 8, marginBottom: 12,
  },
  heading: { fontSize: 20, color: "#0B1220", fontFamily: "Roboto-Bold" },
  subheading: {
    fontSize: 13, color: "#5B6B73", textAlign: "center", marginTop: 6, paddingHorizontal: 12,
    fontFamily: "Roboto-Regular",
  },

  card: {
    backgroundColor: "#fff", borderRadius: 18, padding: 16, marginTop: 18,
    shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.06, shadowRadius: 16,
    elevation: 6,
  },

  avatarOuter: {
    width: 96, height: 96, borderRadius: 48, backgroundColor: "#F3F7FA",
    justifyContent: "center", alignItems: "center", overflow: "hidden",
  },
  avatarImg: { width: "100%", height: "100%" },
  cameraBtn: { position: "absolute", bottom: -2, right: -2 },
  cameraInner: {
    width: 28, height: 28, borderRadius: 14, justifyContent: "center", alignItems: "center",
  },
  tapText: { marginTop: 6, fontSize: 12, color: "#6B7A86", fontFamily: "Roboto-Regular" },

  inputWrapper: {
    flexDirection: "row", alignItems: "center", backgroundColor: "#fff",
    borderRadius: 12, paddingHorizontal: 12, borderWidth: 1, borderColor: "#EEF2F4", marginBottom: 12,
  },
  input: {
    flex: 1, paddingVertical: Platform.OS === "ios" ? 12 : 10, marginLeft: 10, color: "#0B1220",
    fontFamily: "Roboto-Regular", fontSize: 14,
  },
  label: { fontSize: 13, color: "#5B6B73", marginBottom: 8, fontFamily: "Roboto-SemiBold" },

  roleRow: { flexDirection: "row", gap: 12, marginBottom: 10 },
  roleBox: {
    flex: 1, backgroundColor: "#fff", borderRadius: 12, paddingVertical: 12, paddingHorizontal: 12,
    borderWidth: 1, borderColor: "#E6EEF2", flexDirection: "row", alignItems: "center",
  },
  roleText: { marginLeft: 8, fontSize: 14, color: "#51616A", fontFamily: "Roboto-Regular", flex: 1 },
  roleCheckWrap: { width: 26, alignItems: "center" },
  emptyDot: { width: 18, height: 18, borderRadius: 9, borderWidth: 1, borderColor: "#E6EEF2" },
  checkCircle: { width: 22, height: 22, borderRadius: 11, justifyContent: "center", alignItems: "center" },

  featuresBox: {
    backgroundColor: "#fff", borderRadius: 12, padding: 14, marginTop: 10,
    shadowColor: "#000", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2,
  },
  featuresTitle: { fontSize: 14, color: "#112233", marginBottom: 10, fontFamily: "Roboto-Bold" },
  featureRow: { flexDirection: "row", alignItems: "center", paddingVertical: 8 },
  featureIconWrap: { width: 30, alignItems: "center" },
  featureText: { flex: 1, fontSize: 13, color: "#51616A", fontFamily: "Roboto-Regular" },

  ctaBtn: { paddingVertical: 14, borderRadius: 26, alignItems: "center", marginTop: 16 },
  ctaText: { color: "#fff", fontSize: 16, fontFamily: "Roboto-Bold" },

  privacyBox: {
    flexDirection: "row", alignItems: "center", gap: 10, backgroundColor: "#ECFFF4",
    padding: 12, borderRadius: 12, marginTop: 12,
  },
  privacyText: { flex: 1, fontSize: 12, color: "#3C6B50", fontFamily: "Roboto-Regular" },

  sheetRow: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#EEF2F4",
  },
  sheetText: { fontSize: 14, color: "#0B1220", fontFamily: "Roboto-Regular" },
});
