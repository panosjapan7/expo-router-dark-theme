// ./client/app/_layout.tsx
import { useEffect } from "react";
import { Stack, router, usePathname } from "expo-router";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { ThemeProvider, useTheme } from "../contexts/ThemeContext";
import HeaderThemeButton from "../components/HeaderThemeButton";

SplashScreen.preventAutoHideAsync();

const CloseButton = () => {
  const { theme } = useTheme();

  return (
    <Ionicons
      name="close"
      size={24}
      color={theme === "light" ? "#000" : "#fff"}
      onPress={() => router.back()}
    />
  );
};

const ThemeStyledStack = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  const screenOptions = {
    headerStyle: {
      backgroundColor: theme === "light" ? "#fff" : "#000",
    },
    headerTitleStyle: {
      color: theme === "light" ? "#000" : "#fff",
    },
    headerRight: () => <HeaderThemeButton />,
    headerShadowVisible: false,
    headerTintColor: theme === "light" ? "#000" : "#fff",
  };

  return (
    <>
      <StatusBar
        barStyle={
          pathname === "/reset-password" &&
          theme === "light" &&
          Platform.OS === "ios"
            ? "light-content"
            : theme === "light"
            ? "dark-content"
            : "light-content"
        }
        backgroundColor={theme === "light" ? "#fff" : "#000"}
      />
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="register" options={{ headerTitle: "Register" }} />
        <Stack.Screen name="login" options={{ headerTitle: "Login" }} />
        <Stack.Screen
          name="reset-password"
          options={{
            presentation: "modal",
            headerTitle: "Reset Password",
            headerLeft: () => <CloseButton />,
          }}
        />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <ThemeStyledStack />
      </View>
    </ThemeProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
