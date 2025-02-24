import { View, Text, Button, StyleSheet, Platform, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import GoogleFit, { Scopes } from "react-native-google-fit";

export default function HealthDataScreen() {
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [authStatus, setAuthStatus] = useState("Not Authorized");
  const [steps, setSteps] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    const options = {
      scopes: [
        Scopes.FITNESS_ACTIVITY_READ,
        Scopes.FITNESS_BODY_READ,
      ],
    };

    GoogleFit.authorize(options)
      .then((authResult) => {
        if (authResult.success) {
          setAuthStatus("Authorized");
          setIsConnected(true);
          fetchStepData();
        } else {
          setAuthStatus("Authorization Denied");
          console.log("AUTH DENIED", authResult.message);
        }
        setIsConnecting(false);
      })
      .catch((err) => {
        setAuthStatus("AUTH ERROR");
        console.log("AUTH ERROR", err);
        setIsConnecting(false);
      });
  };

  const fetchStepData = () => {
    setLoading(true);
    const options = {
      // Set the time range for today's data.
      startDate: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
      endDate: new Date().toISOString(),
    };

    GoogleFit.getDailyStepCountSamples(options)
      .then((res) => {
        console.log("Step Data:", res);
        // Choose a data source (here, we use the first source with step data)
        if (res.length > 0 && res[0].steps) {
          setSteps(res[0].steps);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleContinue = () => {
    // For example, navigate to a dashboard screen.
     router.push("/dashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect Your Health Data</Text>
      <Text style={styles.description}>
        {`To get started, please connect your ${Platform.OS === "ios" ? "Apple Health" : "Google Fit"} data. This will allow GlucoseCompass to track your blood glucose trends seamlessly.`}
      </Text>
      {isConnecting ? (
        <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
      ) : !isConnected ? (
        <Button
          title={Platform.OS === "ios" ? "Connect Apple Health" : "Connect Google Fit"}
          onPress={handleConnect}
          color="#4CAF50"
        />
      ) : (
        <>
          <Text style={styles.success}>Connected successfully!</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
          ) : (
            <>
              {steps ? (
                <Text style={styles.dataText}>Today's Steps: {steps}</Text>
              ) : (
                <Text style={styles.dataText}>No step data available.</Text>
              )}
              <Button title="Refresh Data" onPress={fetchStepData} color="#4CAF50" />
            </>
          )}
          <Button title="Continue" onPress={handleContinue} color="#1E90FF" />
        </>
      )}
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
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  loader: {
    marginVertical: 20,
  },
  success: {
    fontSize: 18,
    color: "#4CAF50",
    marginVertical: 20,
    textAlign: "center",
  },
  dataText: {
    fontSize: 18,
    color: "#555",
    marginVertical: 10,
    textAlign: "center",
  },
});
