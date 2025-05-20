import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";

export type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onPress: () => void;
};

function Button({ variant, children, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`${variant}Text`]]}>{children}</Text>
    </TouchableOpacity>
  );
}
export default Button;
