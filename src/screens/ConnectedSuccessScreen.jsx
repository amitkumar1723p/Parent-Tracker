import React from "react";
import {

  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ConnectedSuccessScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>


       <LinearGradient


            colors={['#f0fdf4', '#eff6ff']} // from-green-50 → to-blue-50
            start={{ x: 0, y: 0 }}          // top-left
            end={{ x: 1, y: 1 }}            // bottom-right
            style={{flex:1 ,alignItems:'center' , justifyContent:"center"}}
       >

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Check */}
        <View style={styles.topCheck}>
          <LinearGradient
            colors={["#E5F9F0", "#E7F4FF"]}
            style={styles.checkCircle}
          >
            <AntDesign name="checkcircle" size={64} color="#28A745" />
          </LinearGradient>
        </View>

        {/* Title */}
        <Text style={styles.heading}>Successfully Connected! 🎉</Text>
        <Text style={styles.subheading}>
          Great! You're now safely connected to your parent and can start using
          SafeTracker.
        </Text>

        {/* Parent Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Connected to Parent</Text>
          <View style={styles.parentRow}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/older/10.jpg",
              }}
              style={styles.avatar}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.parentName}>Sarah Johnson</Text>
              <Text style={styles.parentRole}>Your Parent</Text>
              <Text style={styles.parentStatus}>● Connected & Active</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Safe Zones Set</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>24/7</Text>
              <Text style={styles.statLabel}>Protection Active</Text>
            </View>
          </View>
        </View>

        {/* What's Next */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>What's Next?</Text>

          <View style={styles.featureRow}>
            {/* <Feather name="map-pin" size={18} color="#4A90FF" /> */}
            <Text style={styles.featureText}>
              Location sharing is now active
            </Text>
          </View>

          <View style={styles.featureRow}>
            <AntDesign name="enviromento" size={18} color="#00C851" />
            <Text style={styles.featureText}>
              Safe zones are automatically set
            </Text>
          </View>

          <View style={styles.featureRow}>
            {/* <MaterialIcons name="sos" size={18} color="#FF4444" /> */}
            <Text style={styles.featureText}>SOS emergency button ready</Text>
          </View>

          <View style={styles.featureRow}>
            {/* <Feather name="bell" size={18} color="#8E44AD" /> */}
            <Text style={styles.featureText}>
              Alerts and notifications enabled
            </Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={{ marginTop: 20 }}
          onPress={() => navigation?.navigate("child-dashboard")}
        >
          <LinearGradient
            colors={["#007BFF", "#00C851"]}
            style={styles.dashboardBtn}
          >
            <Text style={styles.dashboardText}>Go to My Dashboard</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>
          You can always manage your connection settings in the app profile
        </Text>
      </ScrollView>
</LinearGradient>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F9FAFB" },
  topCheck: { alignItems: "center", marginTop: 20 },
  checkCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginTop: 20,
    fontSize: 20,
    // fontWeight: "700",
    fontFamily:"Roboto-Bold",
    textAlign: "center",
    color: "#111",
  },
  subheading: {
    marginTop: 8,
    fontSize: 14,
    fontFamily:"Roboto-Regular",
    color: "#555",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 18,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardTitle: { fontSize: 14,  color: "#111", marginBottom: 12 , fontFamily:"Roboto-Bold" },
  parentRow: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 56, height: 56, borderRadius: 14 },
  parentName: { fontSize: 15,   color: "#111" ,fontFamily:"Roboto-Bold" },
  parentRole: { fontSize: 13, color: "#555", marginTop: 2  , fontFamily:"Roboto-Regular" },
  parentStatus: { fontSize: 12, color: "#00C851", marginTop: 4  ,fontFamily:"Roboto-Regular"  },

  statsRow: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
  },
  statBox: { alignItems: "center", flex: 1 },
  statNumber: { fontSize: 16,


    // fontWeight: "700",

    color: "#111" , fontFamily:"Roboto-Bold"  },
  statLabel: { fontSize: 12, color: "#666", marginTop: 2, textAlign: "center" , fontFamily:"Roboto-Regular" },

  featureRow: { flexDirection: "row", alignItems: "center", marginTop: 12 },
  featureText: { marginLeft: 10, fontSize: 13, color: "#444", flex: 1  , fontFamily:"Roboto-Regular"},

  dashboardBtn: {
    paddingVertical: 14,
    borderRadius: 26,
    alignItems: "center",
  },
  dashboardText: { color: "#fff",
    //  fontWeight: "700",

     fontSize: 15,  fontFamily:"Roboto-Bold" },

  footerText: {
    marginTop: 14,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    lineHeight: 18,
     fontFamily:"Roboto-Regular"
  },
});
