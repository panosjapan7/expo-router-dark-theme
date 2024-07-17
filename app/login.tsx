// ./client/app/login.tsx
import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { useGlobalStyles } from "../styles/styles";

const Login = () => {
  const globalStyles = useGlobalStyles();

  const handleLogin = () => {
    router.replace("/(drawer)/settings");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Login Screen</Text>
      <Pressable onPress={handleLogin}>
        <Text style={globalStyles.textRegular}>Log in</Text>
      </Pressable>
      <Link href="/reset-password">
        <Text style={globalStyles.textRegular}>Forgot Password?</Text>
      </Link>
    </View>
  );
};

export default Login;
