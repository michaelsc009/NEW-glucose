import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "GlucoseCompass",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#63C5DA", 
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Enter Your Age",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="height"
        options={{ title: "Enter Your Height", headerBackVisible: true }}
      />
      <Stack.Screen
        name="weight"
        options={{ title: "Enter Your Weight", headerBackVisible: true }}
      />
      <Stack.Screen
        name="diabetestype"
        options={{ title: "Diabetes Type", headerBackVisible: true }}
      />
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="dashboard"
        options={{ headerShown: true }}
      />
    </Stack>
  );
}
