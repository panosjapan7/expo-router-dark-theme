// ./client/app/_layout.tsx
import { useEffect } from "react";
import { Stack, router, usePathname } from "expo-router";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
import { useGlobalStyles } from "../styles/styles";

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
      backgroundColor: theme === "light" ? "#fff" : "#282828",
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
      <SafeAreaView edges={["right", "left"]} style={{ flex: 1 }}>
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
      </SafeAreaView>
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
  const globalStyles = useGlobalStyles();

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View style={globalStyles.rootContainer}>
      <ThemeStyledStack />
    </View>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <RootLayout />
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
});
