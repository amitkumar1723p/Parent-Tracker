// RoleSelectorScreen.js
import React, { useState } from "react";
import {

  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate } from "../navigation/NavigationService";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import AntDesign from "react-native-vector-icons/AntDesign";

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

export default function RoleSelectorScreen() {
  const [selectedRole, setSelectedRole] = useState(null); // 'parent' | 'child' | null

  const onContinue = () => {
    if (!selectedRole) return;
    // placeholder: navigate or do API call
    console.log("Continue with role:", selectedRole);

      if(selectedRole == "child") {
navigate('child')
      } else{

navigate('parent-dashboard')
      }
    // navigation.navigate("NextScreen", { role: selectedRole });
  };

  const RoleCard = ({ roleKey, title, description, avatarIcon, highlightColor }) => {
    const isSelected = selectedRole === roleKey;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setSelectedRole(roleKey)}
        style={[
          styles.card,
          isSelected ? { borderColor: highlightColor, borderWidth: 2 } : {},
        ]}
      >
        {/* Left: avatar */}
        <LinearGradient
          colors={["#E6F2FF", "#E8FFF2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.avatarWrap}
        >
          <LinearGradient
            colors={["#7CCBFF", "#6EE2A4"]}
            style={styles.avatarInner}
          >
            {/* <MaterialCommunityIcons name={avatarIcon} size={26} color="#fff" /> */}
          </LinearGradient>
        </LinearGradient>

        {/* Middle: text */}
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDesc}>{description}</Text>
        </View>

        {/* Right: check */}
        <View style={styles.checkWrap}>
          {isSelected ? (
            <View style={[styles.checkCircle, { backgroundColor: highlightColor }]}>
              {/* <AntDesign name="check" size={14} color="#fff" /> */}
            </View>
          ) : (
            <View style={styles.emptyDot} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* Top gradient background */}
      <LinearGradient
        colors={["#F6FBFD", "#EDF9F6"]}
        style={styles.topBackground}
      />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header (logo + title + subtitle) - placed above white card area */}
        <View style={styles.header}>
          <LinearGradient colors={["#7CCBFF", "#6EE2A4"]} style={styles.logo}>
            {/* <MaterialCommunityIcons name="map-marker" size={28} color="#fff" /> */}
          </LinearGradient>
          <Text style={styles.heading}>Choose Your Role</Text>
          <Text style={styles.subheading}>
            Select how you'll be using SafeTracker to get the right experience
          </Text>
        </View>

        {/* White rounded card container (holds the role cards + features + button) */}
        <View style={styles.whiteCard}>
          <RoleCard
            roleKey="parent"
            title="I am a Parent"
            description="Track and monitor your children's locations, set up safe zones, and receive alerts"
            avatarIcon="account"
            highlightColor="#4A90FF" // blue
          />

          <RoleCard
            roleKey="child"
            title="I am a Child"
            description="Share your location with parents and use the SOS button for emergencies"
            avatarIcon="account-child"
            highlightColor="#00C851" // green
          />

          {/* Features box - only show if a role is selected (like screenshot second/third) */}
          {selectedRole && (
            <View style={styles.featuresBox}>
              <Text style={styles.featuresTitle}>
                {selectedRole === "parent" ? "Parent Features" : "Child Features"}
              </Text>

              {FEATURES[selectedRole].map((f, i) => (
                <View key={i} style={styles.featureRow}>
                  <View style={styles.featureIconWrap}>
                    {/* <MaterialIcons name={f.icon} size={18} color={selectedRole === "parent" ? "#4A90FF" : "#00C851"} /> */}
                  </View>
                  <Text style={styles.featureText}>{f.text}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Continue button */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onContinue}
            disabled={!selectedRole}
            style={{ marginTop: 18, marginBottom: 8 }}
          >
            <LinearGradient
              colors={["#007BFF", "#00C851"]}
              style={[styles.continueBtn, !selectedRole ? { opacity: 0.45 } : {}]}
            >
              <Text style={styles.continueText}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* small bottom spacing */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // safe: { flex: 1, backgroundColor: "#F2F7F7" },
  safe: { flex: 1, backgroundColor: "#F2F7F7" },
  topBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 260,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0B1220",
  },
  subheading: {
    fontSize: 13,
    color: "#5B6B73",
    textAlign: "center",
    marginTop: 6,
    paddingHorizontal: 12,
  },

  whiteCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginTop: 18,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    // Android elevation
    elevation: 6,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginVertical: 10,
    // subtle card shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarWrap: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarInner: {
    width: 46,
    height: 46,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    flex: 1,
    marginLeft: 12,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 15,
    color: "#0B1220",
    fontWeight: "700",
  },
  cardDesc: {
    marginTop: 6,
    fontSize: 12,
    color: "#58646C",
    lineHeight: 17,
  },
  checkWrap: {
    width: 36,
    alignItems: "center",
  },
  emptyDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#E6EEF2",
  },
  checkCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  featuresBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
    // card shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  featuresTitle: {
    fontSize: 14,
    color: "#112233",
    fontWeight: "700",
    marginBottom: 10,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  featureIconWrap: {
    width: 30,
    alignItems: "center",
  },
  featureText: {
    flex: 1,
    fontSize: 13,
    color: "#51616A",
  },

  continueBtn: {
    paddingVertical: 14,
    borderRadius: 26,
    alignItems: "center",
  },
  continueText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
