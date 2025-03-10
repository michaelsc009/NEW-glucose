import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { SafeAreaView } from "react-native-safe-area-context";

const GoogleSignInScreen = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (Platform.OS === "android") {
      GoogleSignin.configure({
        webClientId: "395729604581-rl27f5r2viecl42cs3f3cb6fm6ve4cnj.apps.googleusercontent.com", // From Firebase
        offlineAccess: true, // Enables getting a refresh token
      });
    }
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices(); // Ensure Google Play Services are available
      const response = await GoogleSignin.signIn();

      if (response.user) {
        setUserInfo(response.user);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the sign-in process.");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Sign-in is already in progress.");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Google Play Services not available or outdated.");
      } else {
        console.log("An unknown error occurred.");
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null);
      console.log("User signed out.");
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Google Sign-In (Android Only)</Text>
      {userInfo ? (
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoText}>Welcome, {userInfo.name}</Text>
          <Button title="Sign Out" onPress={signOut} color="#D9534F" />
        </View>
      ) : (
        <Button title="Sign In with Google" onPress={signIn} color="#4285F4" />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  userInfoContainer: { alignItems: "center" },
  userInfoText: { fontSize: 18, marginBottom: 10 },
});

export default GoogleSignInScreen;
