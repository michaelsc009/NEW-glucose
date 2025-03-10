import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function HeightForm() {
  const [heightUnit, setHeightUnit] = useState("feet"); // 'feet' or 'meters'
  const [heightFeet, setHeightFeet] = useState("5");       // Default feet
  const [heightInches, setHeightInches] = useState("6");     // Default inches
  const [heightMeters, setHeightMeters] = useState("");      // Height in meters (as string)
  const router = useRouter();

  const handleSubmit = () => {
    let totalInches;
    if (heightUnit === "feet") {
      totalInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
      console.log(`Height: ${heightFeet} ft ${heightInches} in = ${totalInches} inches`);
    } else {
      const meters = parseFloat(heightMeters);
      if (!isNaN(meters)) {
        const roundedMeters = Math.round(meters * 100) / 100;
        totalInches = roundedMeters * 39.3701;
        console.log(`Height: ${roundedMeters} m = ${totalInches.toFixed(2)} inches`);
      } else {
        console.log("Please enter a valid height in meters.");
        return;
      }
    }
    router.push("/weight"); // Navigate to the weight form
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Enter Your Height</Text>
        
        {/* Unit Selector */}
        <View style={styles.unitPickerContainer}>
          <Text style={styles.label}>Select Unit:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={heightUnit}
              style={styles.unitPicker}
              onValueChange={(itemValue) => setHeightUnit(itemValue)}
            >
              <Picker.Item label="Feet/Inches" value="feet" />
              <Picker.Item label="Meters" value="meters" />
            </Picker>
          </View>
        </View>

        {heightUnit === "feet" ? (
          <View style={styles.pickerContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Feet</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={heightFeet}
                  style={styles.picker}
                  onValueChange={(itemValue) => setHeightFeet(itemValue)}
                >
                  {["4", "5", "6", "7"].map((ft) => (
                    <Picker.Item key={ft} label={`${ft}`} value={ft} />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Inches</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={heightInches}
                  style={styles.picker}
                  onValueChange={(itemValue) => setHeightInches(itemValue)}
                >
                  {Array.from({ length: 12 }, (_, i) => i.toString()).map((inch) => (
                    <Picker.Item key={inch} label={`${inch}`} value={inch} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.meterInputContainer}>
            <Text style={styles.label}>Height (m)</Text>
            <TextInput
              style={styles.meterInput}
              keyboardType="decimal-pad"
              value={heightMeters}
              onChangeText={setHeightMeters}
              placeholder="e.g., 1.75"
            />
          </View>
        )}

        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={handleSubmit} color="#4CAF50" />
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
  title: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  unitPickerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  pickerWrapper: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#F2F2F2",
  },
  unitPicker: {
    width: "100%",
    height: 50,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputGroup: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  picker: {
    width: "100%",
    height: 50,
  },
  meterInputContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  meterInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    width: "80%",
    padding: 12,
    fontSize: 16,
    textAlign: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
