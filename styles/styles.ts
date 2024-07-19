// ./client/styles/styles.ts
import { StyleSheet } from "react-native";

import { useTheme } from "../contexts/ThemeContext";

export const useGlobalStyles = () => {
  const { theme } = useTheme();
  const themeTextColor = theme === "light" ? "#000" : "#fff";

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === "light" ? "#fff" : "#282828",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    textLight: {
      color: themeTextColor,
      fontFamily: "Inter_300Light",
    },
    textRegular: {
      color: themeTextColor,
      fontFamily: "Inter_400Regular",
    },
    textMedium: {
      color: themeTextColor,
      fontFamily: "Inter_500Medium",
    },
    textBold: {
      color: themeTextColor,
      fontFamily: "Inter_700Bold",
    },
    textBlack: {
      color: themeTextColor,
      fontFamily: "Inter_900Black",
    },
  });

  return styles;
};
