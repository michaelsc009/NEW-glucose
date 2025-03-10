import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";

export default function WeightForm() {
  // Weight is stored in pounds.
  const [weight, setWeight] = useState(150);
  const [weightUnit, setWeightUnit] = useState("lbs"); // "lbs" or "kgs"
  const router = useRouter();

  // Convert weight to display in chosen unit.
  const displayedWeight =
    weightUnit === "lbs"
      ? `${weight} lbs`
      : `${(weight / 2.20462).toFixed(1)} kgs`;

  const handleNext = () => {
    if (weightUnit === "lbs") {
      console.log(`Selected Weight: ${weight} lbs`);
    } else {
      const weightInKgs = (weight / 2.20462).toFixed(1);
      console.log(`Selected Weight: ${weightInKgs} kgs`);
    }
    router.push("/diabetestype"); // Navigate to the next form
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Enter Your Weight</Text>
        
        {/* Unit Selector */}
        <View style={styles.unitPickerContainer}>
          <Text style={styles.label}>Select Unit:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={weightUnit}
              style={styles.unitPicker}
              onValueChange={(itemValue) => setWeightUnit(itemValue)}
            >
              <Picker.Item label="Pounds" value="lbs" />
              <Picker.Item label="Kilograms" value="kgs" />
            </Picker>
          </View>
        </View>
        
        <Text style={styles.weightDisplay}>{displayedWeight}</Text>
        
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={350}
          step={1}
          value={weight}
          onValueChange={setWeight}
          minimumTrackTintColor="#1E90FF"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#1E90FF"
        />

        <View style={styles.buttonContainer}>
          <Button title="Next" onPress={handleNext} color="#4CAF50" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
    marginBottom: 20,
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
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  weightDisplay: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#333",
  },
  slider: {
    width: "100%",
    height: 40,
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: "center",
  },
});
