// ./client/app/(drawer)/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../../../contexts/ThemeContext";
import HeaderThemeButton from "../../../components/HeaderThemeButton";

const TabsLayout = () => {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme === "light" ? "#fff" : "#282828",
        },
        headerTintColor: theme === "light" ? "#000" : "#fff",
        tabBarStyle: {
          backgroundColor: theme === "light" ? "#fff" : "#282828",
          borderTopWidth: 0,
        },

        tabBarLabelStyle: { color: theme === "light" ? "#000" : "#fff" },
        tabBarActiveTintColor: theme === "light" ? "#000" : "#fff",
        headerLeft: () => (
          <DrawerToggleButton tintColor={theme === "light" ? "#000" : "#fff"} />
        ),
        headerRight: () => <HeaderThemeButton />,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarLabel: "Feed",
          headerTitle: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="keypad" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          headerTitle: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name="hidden" options={{ href: null }} />
    </Tabs>
  );
};

export default TabsLayout;
