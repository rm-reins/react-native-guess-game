import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./StartGameScreen.styles";

export type StartGameScreenProps = {
  onStart: (userNumber: number) => void;
};

function StartGameScreen({ onStart }: StartGameScreenProps) {
  const [number, setNumber] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "" || /^\d+$/.test(value)) {
      setNumber(value);
      setError("");
    }
  };

  const handleStartGame = () => {
    const parsedNumber = parseInt(number, 10);

    if (!number) {
      setError("Please enter a number");
    }

    if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 100) {
      setError("Please enter a number between 1 and 100");
    }

    onStart(parsedNumber);
  };
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="dice-3-outline"
        size={24}
        color="black"
      />
      <Text>Start Game</Text>
    </View>
  );
}
export default StartGameScreen;
