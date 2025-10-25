import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { navigate } from "../navigation/NavigationService";
import Icon from "react-native-vector-icons/Ionicons";

const AddChildScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {
    // TODO: implement ImagePicker
    alert("Photo picker coming soon 🚀");
  };

  const handleContinue = () => {
    console.log({ name, age, photo });
    navigate('add-invite')
    // navigation.navigate("NextScreen");
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom' ,"right" ,"left"]}>

            <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop:13}}>
      {/* Header */}


      {/* Top Icon */}
      <View style={styles.topIcon}>
        <Icon name="person-add-outline" size={40} color="#4CAF50" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Add Your Child  </Text>
      <Text style={styles.subtitle}>
        Enter your child's details to get started
      </Text>

      {/* Form */}
      <View style={styles.form}>
        {/* Child's Name */}
        <View style={styles.field}>
          <Text style={styles.label}>Child's Name</Text>
          <View style={styles.inputWrapper}>
<Icon name="person-outline" size={20} color="#777" />
            <TextInput
              style={styles.input}
              placeholder="Enter child's name"
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>

        {/* Age */}
        <View style={styles.field}>
          <Text style={styles.label}>Age</Text>
          <View style={styles.inputWrapper}>
                      <Icon name="calendar-outline" size={20} color="#777" />
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
                  <Icon name="camera-outline" size={30} color="#aaa" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.photoButton}
              onPress={handleChoosePhoto}
            >
              <Text style={styles.photoButtonText}>Choose Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity onPress={handleContinue} style={styles.buttonWrapper}>
        <LinearGradient colors={["#007BFF", "#00C851"]} style={styles.button}>
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
    paddingVertical: 12,
  },

  topIcon: {
    alignSelf: "center",
    marginVertical: 20,
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    // fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
    fontFamily:"Roboto-Bold" ,

  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
fontFamily:"Roboto-Regular" ,
  },
  form: {
    marginTop: 10,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    // fontWeight: "500",
    color: "#333",
    marginBottom: 6,
    fontFamily:"Roboto-SemiBold" ,
  },
  inputWrapper: {
     flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",

  },
  input: {
    flex: 1,
    paddingVertical: 10,
     marginLeft: 8,
    fontSize: 16,
    fontFamily:"Roboto-Regular" ,
  },
    photoLabel: {
    fontSize: 14,
    color: "#444",
    marginBottom: 10,
    fontFamily:"Roboto-Regular" ,
  },
  photoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    gap: 12,
  },
  photoPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  photoButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f2f9ff",
    borderWidth: 1,
    borderColor: "#d0e8ff",
  },
  photoButtonText: {
    fontSize: 14,
    color: "#007BFF",
    // fontWeight: "600",
    fontFamily:"Roboto-SemiBold" ,
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
  buttonText: {
    fontSize: 16,
    // fontWeight: "700",

    color: "#fff",
    fontFamily:"Roboto-Bold" ,
  },
});
