import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function DiabetesAndCGMForm() {
  const [diabetesType, setDiabetesType] = useState("T1"); // Default: Type 1
  const [cgmDevice, setCgmDevice] = useState("Dexcom G6"); // Default CGM device
  const router = useRouter();

  const handleSubmit = () => {
    console.log(`Selected Diabetes Type: ${diabetesType}`);
    console.log(`Selected CGM Device: ${cgmDevice}`);
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Diabetes & CGM Setup</Text>

        <Text style={styles.label}>Select Your Type of Diabetes:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={diabetesType}
            style={styles.picker}
            onValueChange={(itemValue) => setDiabetesType(itemValue)}
          >
            <Picker.Item label="Type 1 Diabetes" value="T1" />
            <Picker.Item label="Type 2 Diabetes" value="T2" />
          </Picker>
        </View>

        <Text style={styles.label}>Select Your CGM Device:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={cgmDevice}
            style={styles.picker}
            onValueChange={(itemValue) => setCgmDevice(itemValue)}
          >
            <Picker.Item label="Dexcom G6" value="Dexcom G6" />
            <Picker.Item label="Dexcom G7" value="Dexcom G7" />
            <Picker.Item label="Freestyle Libre 2" value="Freestyle Libre 2" />
            <Picker.Item label="Freestyle Libre 3" value="Freestyle Libre 3" />
            <Picker.Item label="Medtronic Guardian Connect" value="Medtronic Guardian Connect" />
          </Picker>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} color="#4CAF50" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#F2F2F2",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: "center",
  },
});
