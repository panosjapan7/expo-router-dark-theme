// ./client/app/reset-password.tsx
import { Text, View } from "react-native";

import { useGlobalStyles } from "../styles/styles";

const ResetPassword = () => {
  const globalStyles = useGlobalStyles();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Reset Password Screen</Text>
    </View>
  );
};

export default ResetPassword;
