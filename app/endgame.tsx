import { GameOverScreen } from "@/components/screens/GameOverScreen";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function EndGame() {
  const router = useRouter();
  const { userNumber, guessCount, wasCorrect } = useLocalSearchParams<{
    userNumber: string;
    guessCount: string;
    wasCorrect: string;
  }>();

  const handlePlayAgain = () => {
    router.push({
      pathname: "/",
    });
  };

  return (
    <GameOverScreen
      guessedNumber={parseInt(userNumber || "0", 10)}
      totalGuesses={parseInt(guessCount || "0", 10)}
      onPlayAgain={handlePlayAgain}
    />
  );
}
