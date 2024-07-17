// ./client/app/(drawer)/_layout.tsx
import { router, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../../contexts/ThemeContext";
import HeaderThemeButton from "../../components/HeaderThemeButton";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"Feed"}
        labelStyle={{ color: theme === "light" ? "#000" : "#fff" }}
        icon={({ color, size }) => (
          <Ionicons
            name="keypad"
            size={size}
            color={theme === "light" ? "#000" : "#fff"}
          />
        )}
        onPress={() => router.push("/(drawer)/(tabs)/feed")}
        style={{
          backgroundColor:
            pathname === "/feed"
              ? theme === "light"
                ? "#e0e0e0"
                : "#333"
              : theme === "light"
              ? "#fff"
              : "#282828",
        }}
      />
      <DrawerItem
        label={"Settings"}
        labelStyle={{ color: theme === "light" ? "#000" : "#fff" }}
        icon={({ color, size }) => (
          <Ionicons
            name="settings"
            size={size}
            color={theme === "light" ? "#000" : "#fff"}
          />
        )}
        onPress={() => router.push("/(drawer)/settings")}
        style={{
          backgroundColor:
            pathname === "/settings"
              ? theme === "light"
                ? "#e0e0e0"
                : "#333"
              : theme === "light"
              ? "#fff"
              : "#282828",
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  const { theme } = useTheme();

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerRight: () => <HeaderThemeButton />,
        headerShadowVisible: false,
        headerTintColor: theme === "light" ? "#000" : "#fff",
        drawerStyle: {
          backgroundColor: theme === "light" ? "#fff" : "#282828",
        },
        drawerActiveTintColor: theme === "light" ? "#000" : "#fff",
        drawerLabelStyle: { color: theme === "light" ? "#000" : "#fff" },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          drawerLabel: "Settings",
          headerStyle: { backgroundColor: theme === "light" ? "#fff" : "#000" },
          headerTitleStyle: { color: theme === "light" ? "#000" : "#fff" },
          headerShown: true,
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
