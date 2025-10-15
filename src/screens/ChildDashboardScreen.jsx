import React, { useState } from "react";
import {

  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
// import Feather from "react-native-vector-icons/Feather";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function ChildDashboardScreen() {
  const [locationSharing, setLocationSharing] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>


    <LinearGradient
      colors={['#f0fdf4', '#eff6ff']} // from-green-50 → to-blue-50
      start={{ x: 0, y: 0 }}          // top-left
      end={{ x: 1, y: 1 }}            // bottom-right (to-br)
      style={styles.gradient}
    >





      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi Sarah! 👋</Text>
            <Text style={styles.subtitle}>Stay safe and connected</Text>
          </View>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/lego/1.jpg",
            }}
            style={styles.avatar}
          />
        </View>

        {/* Location Sharing */}
        <View style={styles.card}>
          {/* <Feather
            name="map-pin"
            size={32}
            color="#28A745"
            style={{ alignSelf: "center", marginBottom: 10 }}
          /> */}
          <Text style={styles.cardTitle}>Location Sharing</Text>
          <Text style={styles.cardDesc}>
            Your parents can see where you are and keep you safe
          </Text>

          <Switch
            value={locationSharing}
            onValueChange={setLocationSharing}
            thumbColor="#fff"
            trackColor={{ false: "#ddd", true: "#28A745" }}
            style={{ marginTop: 12 }}
          />

          {locationSharing && (
            <View style={styles.locationStatus}>
              <Text style={styles.statusDot}>●</Text>
              <Text style={styles.statusText}>
                Currently at: <Text style={{ fontWeight: "700" }}>Home</Text>
              </Text>
            </View>
          )}
        </View>

        {/* Emergency Help */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Emergency Help</Text>
          <Text style={styles.cardDesc}>
            Press this button if you need help or feel unsafe. Your parents will
            be notified immediately.
          </Text>
          <TouchableOpacity activeOpacity={0.9} style={styles.sosButton}>
            {/* <MaterialIcons name="sos" size={40} color="#fff" /> */}
          </TouchableOpacity>
        </View>

        {/* Connected Parent */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Connected Parent</Text>
          <View style={styles.parentRow}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/65.jpg",
              }}
              style={styles.parentAvatar}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.parentName}>Sarah Johnson</Text>
              <Text style={styles.parentRole}>Your Parent</Text>
              <Text style={styles.connected}>● Connected</Text>
            </View>
            <View style={styles.protectedBadge}>
              {/* <Feather name="shield" size={16} color="#28A745" /> */}
              <Text style={styles.protectedText}>Protected</Text>
            </View>
          </View>
        </View>

        {/* Safety Tips */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Safety Tips 💡</Text>

          <View style={styles.tipRow}>
            {/* <Feather name="navigation" size={18} color="#007BFF" /> */}
            <Text style={styles.tipText}>
              Always tell your parents where you’re going
            </Text>
          </View>

          <View style={styles.tipRow}>
            {/* <AntDesign name="enviromento" size={18} color="#28A745" /> */}
            <Text style={styles.tipText}>
              Stay in safe areas that your parents know about
            </Text>
          </View>

          <View style={styles.tipRow}>
            {/* <MaterialIcons name="sos" size={18} color="#FF4444" /> */}
            <Text style={styles.tipText}>
              Use the SOS button if you ever feel scared or need help
            </Text>
          </View>
        </View>

        {/* Phone Battery */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Phone Battery</Text>
          <Text style={styles.cardDesc}>
            Keep your phone charged for safety
          </Text>

          <View style={styles.batteryRow}>
            <Text style={styles.batteryPercent}>85%</Text>
            <Text style={styles.batteryStatus}>Good level</Text>
          </View>

          <View style={styles.batteryRow}>
            {/* <Feather name="map" size={16} color="#28A745" /> */}
            <Text style={styles.locationActive}>Location Services Active</Text>
          </View>
        </View>
      </ScrollView>

</LinearGradient>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F9FAFB" },


 gradient :{
 flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 } ,
  // safe: { flex: 1, backgroundColor: "red" },

  /* Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  greeting: { fontSize: 18, fontWeight: "700", color: "#111" },
  subtitle: { fontSize: 13, color: "#666", marginTop: 4 },
  avatar: { width: 44, height: 44, borderRadius: 22 },

  /* Card */
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
  cardTitle: { fontSize: 15, fontWeight: "700", color: "#111" },
  cardDesc: { fontSize: 13, color: "#666", marginTop: 6, lineHeight: 18 },

  /* Location Sharing */
  locationStatus: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#E8F8F1",
    padding: 10,
    borderRadius: 10,
  },
  statusDot: { fontSize: 16, color: "#28A745", marginRight: 6 },
  statusText: { fontSize: 13, color: "#111" },

  /* Emergency Help */
  sosButton: {
    marginTop: 20,
    backgroundColor: "#FF3B30",
    borderRadius: 50,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 90,
    height: 90,
  },

  /* Connected Parent */
  parentRow: { flexDirection: "row", alignItems: "center" },
  parentAvatar: { width: 56, height: 56, borderRadius: 14 },
  parentName: { fontSize: 15, fontWeight: "700", color: "#111" },
  parentRole: { fontSize: 13, color: "#555", marginTop: 2 },
  connected: { fontSize: 12, color: "#28A745", marginTop: 4 },
  protectedBadge: {
    flexDirection: "row",
    backgroundColor: "#E8F8F1",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  protectedText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: "600",
    color: "#28A745",
  },

  /* Safety Tips */
  tipRow: { flexDirection: "row", alignItems: "center", marginTop: 12 },
  tipText: { marginLeft: 10, fontSize: 13, color: "#444", flex: 1 },

  /* Battery */
  batteryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  batteryPercent: { fontSize: 20, fontWeight: "700", color: "#111" },
  batteryStatus: { fontSize: 13, color: "#28A745" },
  locationActive: { fontSize: 13, color: "#28A745", marginLeft: 6 },
});




