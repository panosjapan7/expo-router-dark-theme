// ./client/app/(drawer)/(tabs)/hidden.tsx
import { Text, View } from "react-native";

import { useGlobalStyles } from "../../../styles/styles";

const Hidden = () => {
  const globalStyles = useGlobalStyles();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textBlack}>Hidden Screen</Text>
    </View>
  );
};

export default Hidden;
