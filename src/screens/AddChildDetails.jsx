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
// import Icon from "react-native-vector-icons/Ionicons";

const AddChildScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleContinue = () => {
    console.log({ name, age });
    // navigation.navigate("NextScreen");
  };

  return (
    <SafeAreaView style={styles.container}>

  <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle ={{flex:1}}>






      {/* Top Icon */}
      <View style={styles.topIcon}>
        {/* <Icon name="person-add-outline" size={36} color="#007BFF" /> */}
      </View>

      {/* Title + Subtitle */}
      <Text style={styles.title}>Add Your Childe</Text>
      <Text style={styles.subtitle}>
        Enter your child's details to get started amit
      </Text>

      {/* Child's Name */}
      <View style={styles.field}>
        <Text style={styles.label}>Child’s Name</Text>
        <View style={styles.inputWrapper}>
          {/* <Icon name="person-outline" size={18} color="#777" /> */}
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>

      {/* Age */}
      <View style={styles.field}>
        <Text style={styles.label}>Age</Text>
        <View style={styles.inputWrapper}>
          {/* <Icon name="calendar-outline" size={18} color="#777" /> */}
          <TextInput
            style={styles.input}
            placeholder="Enter age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
        </View>
      </View>

      {/* Profile Photo */}
      <View style={styles.field}>
        <Text style={styles.label}>Profile Photo (Optional)</Text>
        <View style={styles.photoRow}>
          <TouchableOpacity style={styles.photoPlaceholder}>
            {/* <Icon name="camera-outline" size={28} color="#aaa" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.photoButton}>
            <Text style={styles.photoButtonText}>Choose Photo</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleContinue}
        disabled={!name || !age} // Disabled until input is filled
        style={styles.buttonWrapper}
      >
        <LinearGradient
          colors={["#007BFF", "#00C851"]}
          style={[styles.button, (!name || !age) && styles.buttonDisabled]}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </LinearGradient>
      </TouchableOpacity>


 </ScrollView>

    </SafeAreaView>
  );
};

export default AddChildScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB", // light background like screenshot
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  topIcon: {
    alignSelf: "center",
    marginVertical: 20,
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#EAF3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 8,
    fontSize: 15,
  },
  photoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  photoPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
  },
  photoButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#F0F7FF",
    borderWidth: 1,
    borderColor: "#D0E7FF",
  },
  photoButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007BFF",
  },
  buttonWrapper: {
    marginTop: "auto",
    marginBottom: 20,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
