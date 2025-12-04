import React from "react";
import {

  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate } from "../navigation/NavigationService";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ParentDashboardScreen() {
  const children = [
    {
      id: 1,
      name: "Sarah",
      location: "Lincoln Elementary School",
      battery: "85%",
      status: "safe",
      time: "2 min ago",
      img: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
    {
      id: 2,
      name: "Alex",
      location: "Soccer Field",
      battery: "62%",
      status: "moving",
      time: "5 min ago",
      img: "https://randomuser.me/api/portraits/lego/2.jpg",
    },
    {
      id: 3,
      name: "Emma",
      location: "Home",
      battery: "91%",
      status: "safe",
      time: "1 min ago",
      img: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}  >
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              style={styles.avatar}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.parentName}>Sarah Johnson</Text>
              <Text style={styles.online}>● Online</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="notifications-outline" size={22} color="#222" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="settings-outline" size={22} color="#222" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Feather name="smile" size={22} color="#28A745" />
            <Text style={styles.statTitle}>All Safe</Text>
            <Text style={styles.statValue}>3/3</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="alert-circle-outline" size={22} color="#007BFF" />
            <Text style={styles.statTitle}>Alerts Today</Text>
            <Text style={styles.statValue}>2</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="people-outline" size={22} color="#6F42C1" />
            <Text style={styles.statTitle}>Active</Text>
            <Text style={styles.statValue}>3</Text>
          </View>
        </View>

        {/* Live Locations */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Live Locations</Text>
          <Image
            source={{
              uri: "https://i.ibb.co/xYM0Jw1/map-placeholder.png",
            }}
            style={styles.map}
          />
          <View style={styles.tagsRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Safe</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: "#E0ECFF" }]}>
              <Text style={[styles.tagText, { color: "#007BFF" }]}>Moving</Text>
            </View>
          </View>
        </View>

        {/* Children */}
        <View style={styles.card}>
          <View style={styles.childrenHeader}>
            <Text style={styles.cardTitle}>Children</Text>
            <TouchableOpacity onPress={() => {
              navigate('add-invite')

            }}>
              <Text style={styles.addChild}>Connect Children</Text>
            </TouchableOpacity>
          </View>

          {children.map((child) => (
            <View key={child.id} style={styles.childRow}>
              <Image source={{ uri: child.img }} style={styles.childAvatar} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.childName}>{child.name}</Text>
                <Text style={styles.childLocation}>{child.location}</Text>
                <View style={styles.childStatusRow}>
                  <Ionicons name="battery-charging" size={14} color="#28A745" />
                  <Text style={styles.childBattery}>{child.battery}</Text>
                  <View
                    style={[
                      styles.statusBadge,
                      child.status === "safe"
                        ? { backgroundColor: "#E8F8F1" }
                        : { backgroundColor: "#E0ECFF" },
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        child.status === "safe"
                          ? { color: "#28A745" }
                          : { color: "#007BFF" },
                      ]}
                    >
                      {child.status}
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.childTime}>{child.time}</Text>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <View style={styles.quickRow}>
            <TouchableOpacity style={styles.quickCard}>
              <Ionicons name="location-outline" size={22} color="#007BFF" />
              <Text style={styles.quickTitle}>Safe Zones</Text>
              <Text style={styles.quickDesc}>Manage geofencing</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.quickCard, { marginLeft: 12 }]}>
              <Ionicons name="alert-circle-outline" size={22} color="#FF3B30" />
              <Text style={styles.quickTitle}>Alerts</Text>
              <Text style={styles.quickDesc}>View notifications</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Tabs */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F9FAFB" },

  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: { width: 46, height: 46, borderRadius: 23 },
  parentName: {
    fontSize: 16, color: "#111", fontFamily: "Roboto-Bold"


    // fontWeight: "700",
  },
  online: { fontSize: 13, color: "#28A745", marginTop: 4, fontFamily: "Roboto-Regular" },
  iconBtn: { marginLeft: 12 },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 4,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statTitle: { fontSize: 13, color: "#666", marginTop: 6, fontFamily: "Roboto-Regular" },
  statValue: {
    fontSize: 16,

    // fontWeight: "700",

    marginTop: 2, color: "#111", fontFamily: "Roboto-Bold"
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 15,

    // fontWeight: "700",

    color: "#111", fontFamily: "Roboto-Bold"
  },

  map: {
    marginTop: 12,
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  tagsRow: { flexDirection: "row", marginTop: 10 },
  tag: {
    backgroundColor: "#E8F8F1",
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  tagText: {
    fontSize: 12, color: "#28A745", fontFamily: "Roboto-SemiBold",

    // fontWeight: "600" ,
  },

  childrenHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addChild: {
    fontSize: 13,
    // fontWeight: "600",
    color: "#007BFF", fontFamily: "Roboto-SemiBold"
  },
  childRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  childAvatar: { width: 50, height: 50, borderRadius: 14 },
  childName: {
    fontSize: 15,

    // fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: "#111"
  },
  childLocation: { fontSize: 13, color: "#666", marginTop: 2, fontFamily: "Roboto-Regular" },
  childStatusRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  childBattery: { fontSize: 12, marginLeft: 6, marginRight: 10, color: "#111", fontFamily: "Roboto-Regular" },
  statusBadge: {
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  statusText: {
    fontSize: 12,
    //  fontWeight: "600",

    fontFamily: "Roboto-SemiBold",
  },
  childTime: { fontSize: 12, color: "#888", fontFamily: "Roboto-Regular", },

  quickRow: { flexDirection: "row", marginTop: 14 },
  quickCard: {
    flex: 1,
    backgroundColor: "#F6F8FA",
    borderRadius: 12,
    padding: 14,
  },
  quickTitle: {
    fontSize: 14,

    // fontWeight: "700",

    marginTop: 6, color: "#111", fontFamily: "Roboto-Bold",
  },
  quickDesc: { fontSize: 12, color: "#666", marginTop: 2, fontFamily: "Roboto-Regular" },

  bottomTabs: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
  tab: { alignItems: "center" },
  tabText: { fontSize: 12, color: "#888", marginTop: 2, fontFamily: "Roboto-Regular", },
  tabTextActive: { fontSize: 12, color: "#007BFF", marginTop: 2, fontFamily: "Roboto-Regular", },
});
