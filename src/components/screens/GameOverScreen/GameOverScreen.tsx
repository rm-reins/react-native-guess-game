import { Button } from "@/components/ui/Button";
import { Award } from "lucide-react-native";
import { Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { styles } from "./GameOverScreen.styles";

interface GameOverScreenProps {
  guessedNumber: number;
  totalGuesses: number;
  onPlayAgain: () => void;
}

function GameOverScreen({
  guessedNumber,
  totalGuesses,
  onPlayAgain,
}: GameOverScreenProps) {
  const bounceAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withRepeat(
            withSequence(
              withTiming(-10, { duration: 500 }),
              withTiming(0, { duration: 500 })
            ),
            -1, // Infinite
            true // Reverse
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={bounceAnim}>
        <Award
          size={100}
          strokeWidth={3}
          color="#FF9F43"
        />
      </Animated.View>

      <Text style={styles.title}>Got it!</Text>

      <Text style={styles.subtitle}>The app guess your number:</Text>

      <View style={styles.numberContainer}>
        <Text style={styles.number}>{guessedNumber}</Text>
      </View>

      <Text style={styles.stats}>
        It took {totalGuesses} guesses to find your number.
      </Text>

      <Button
        variant="primary"
        onPress={onPlayAgain}
      >
        Play Again
      </Button>
    </View>
  );
}
export default GameOverScreen;
