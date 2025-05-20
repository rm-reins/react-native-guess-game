import { Button } from "@/components/ui/Button";
import { Dice3 } from "lucide-react-native";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./StartGameScreen.styles";

export type StartGameScreenProps = {
  onStart: (userNumber: number) => void;
};

function StartGameScreen({ onStart }: StartGameScreenProps) {
  const [number, setNumber] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleStartGame = () => {
    const parsedNumber = parseInt(number, 10);

    if (!number) {
      setError("Please enter a number");
      return;
    }

    if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 100) {
      setError("Please enter a number between 1 and 100");
      return;
    }

    setError("");
    onStart(parsedNumber);
  };

  return (
    <View style={styles.container}>
      <Dice3
        size={80}
        strokeWidth={3}
        style={styles.dice}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Guess a Number</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleDescription}>
          Enter a number between 1 and 100.
        </Text>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <TextInput
        style={styles.inputContainer}
        value={number}
        maxLength={3}
        inputMode="numeric"
        keyboardType="number-pad"
        placeholder="Your number"
        placeholderTextColor="#7794B7"
        onChangeText={(value) => setNumber(value)}
      />

      <Button
        variant="primary"
        onPress={handleStartGame}
      >
        Start Game
      </Button>
    </View>
  );
}
export default StartGameScreen;
