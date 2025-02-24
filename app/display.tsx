// import React, { useEffect, useState } from "react";
// import { View, Text, Button, StyleSheet, ActivityIndicator } from "react-native";
// import GoogleFit, { Scopes } from "react-native-google-fit";
// import { useRouter } from "expo-router";

// export default function GoogleFitDataScreen() {
//   const [authStatus, setAuthStatus] = useState("Not Authorized");
//   const [steps, setSteps] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const options = {
//       scopes: [
//         Scopes.FITNESS_ACTIVITY_READ,
//         Scopes.FITNESS_BODY_READ,
//       ],
//     };

//     GoogleFit.authorize(options)
//       .then((authResult) => {
//         if (authResult.success) {
//           setAuthStatus("Authorized");
//           fetchStepData();
//         } else {
//           setAuthStatus("Authorization Denied");
//           console.log("AUTH DENIED", authResult.message);
//         }
//       })
//       .catch((err) => {
//         setAuthStatus("AUTH ERROR");
//         console.log("AUTH ERROR", err);
//       });
//   }, []);

//   const fetchStepData = () => {
//     setLoading(true);
//     const options = {
//       // Set the time range for today's data
//       startDate: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
//       endDate: new Date().toISOString(),
//     };

//     GoogleFit.getDailyStepCountSamples(options)
//       .then((res) => {
//         console.log("Step Data:", res);
//         // Depending on the data source you can choose the source you need.
//         // Here we try to use the first source with step data.
//         if (res.length > 0 && res[0].steps) {
//           setSteps(res[0].steps);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Google Fit Data</Text>
//       <Text>Status: {authStatus}</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#4CAF50" style={{ margin: 20 }} />
//       ) : (
//         <>
//           {steps ? (
//             <Text style={styles.dataText}>Today's Steps: {steps}</Text>
//           ) : (
//             <Text style={styles.dataText}>No step data available.</Text>
//           )}
//           <Button title="Refresh Data" onPress={fetchStepData} color="#4CAF50" />
//         </>
//       )}
//       <Button title="Continue" onPress={() => router.push("/dashboard")} color="#1E90FF" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F9F9F9",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333",
//   },
//   dataText: {
//     fontSize: 18,
//     marginVertical: 10,
//     color: "#555",
//   },
// });
