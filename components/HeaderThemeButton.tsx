// ./client/components/HeaderThemeButton.tsx
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";

const HeaderThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Ionicons
      name={theme === "light" ? "moon" : "sunny"}
      size={24}
      color={theme === "light" ? "#000" : "#fff"}
      onPress={toggleTheme}
      style={{ marginRight: 15 }}
    />
  );
};

export default HeaderThemeButton;
