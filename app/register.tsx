// ./client/app/register.tsx
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { useGlobalStyles } from "../styles/styles";

const Register = () => {
  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Register Screen</Text>
      <Pressable onPress={() => router.back()}>
        <Text style={globalStyles.textRegular}>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default Register;
