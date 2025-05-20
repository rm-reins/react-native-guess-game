import { Button } from "@/components/ui/Button";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./GameScreen.styles";
interface GameScreenProps {
  currentGuess: number;
  guessCount: number;
  onGuessLower: () => void;
  onGuessHigher: () => void;
}

function GameScreen({
  currentGuess,
  guessCount,
  onGuessLower,
  onGuessHigher,
}: GameScreenProps) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withRepeat(
        withSequence(
          withTiming(0.7, { duration: 1000 }),
          withTiming(1, { duration: 1000 })
        ),
        -1,
        true
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Is it ...</Text>

      <Animated.View style={[styles.guessContainer, animatedStyle]}>
        <Text style={styles.guessText}>{currentGuess}</Text>
      </Animated.View>

      <Button
        variant="primary"
        onPress={onGuessHigher}
      >
        Higher
      </Button>

      <Button
        variant="secondary"
        onPress={onGuessLower}
      >
        Lower
      </Button>

      <View>
        <Text style={styles.stats}>
          Guesses taken: <Text style={styles.statsBold}>{guessCount}</Text>
        </Text>
      </View>
    </View>
  );
}
export default GameScreen;
