import { GameScreen } from "@/components/screens/GameScreen";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

enum GameState {
  START,
  PLAYING,
  GAME_OVER,
}

export default function Game() {
  const { userNumber } = useLocalSearchParams<{ userNumber: string }>();
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [currentGuess, setCurrentGuess] = useState<number>(0);
  const [guessCount, setGuessCount] = useState<number>(0);
  const [parsedUserNumber, setParsedUserNumber] = useState<number>(0);
  const [minRange, setMinRange] = useState<number>(1);
  const [maxRange, setMaxRange] = useState<number>(100);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (userNumber) {
      setParsedUserNumber(parseInt(userNumber));

      const initialGuess = Math.floor(Math.random() * 100) + 1;
      setCurrentGuess(initialGuess);
      setGuessCount(1);
      setGameState(GameState.PLAYING);
    }
  }, [userNumber]);

  useEffect(() => {
    if (gameState === GameState.PLAYING && minRange === maxRange) {
      setCurrentGuess(minRange);
      setGameState(GameState.GAME_OVER);
    }

    if (gameState === GameState.GAME_OVER) {
      // Navigate to result screen with params
      router.push({
        pathname: "/endgame",
        params: {
          userNumber: parsedUserNumber,
          guessCount: guessCount,
          wasCorrect: parsedUserNumber === currentGuess ? "true" : "false",
        },
      });
    }
  }, [gameState, minRange, maxRange]);

  const handleGuessLower = () => {
    setErrorMessage(null);

    const newMaxRange = currentGuess - 1;

    if (parsedUserNumber > currentGuess) {
      setErrorMessage(
        "You're cheating! Your number can't be higher than this guess."
      );
      return;
    }

    if (newMaxRange < minRange) {
      setErrorMessage(
        "No valid number in this range. Did you forget your number?"
      );
      return;
    }

    const nextGuess = Math.floor((minRange + newMaxRange) / 2);
    updateGuess(nextGuess, minRange, newMaxRange);
  };

  const handleGuessHigher = () => {
    setErrorMessage(null);

    const newMinRange = currentGuess + 1;

    if (parsedUserNumber < currentGuess) {
      setErrorMessage(
        "You're cheating! Your number can't be lower than this guess."
      );
      return;
    }

    if (newMinRange > maxRange) {
      setErrorMessage(
        "No valid number in this range. Did you forget your number?"
      );
      return;
    }

    const nextGuess = Math.floor((newMinRange + maxRange) / 2);
    updateGuess(nextGuess, newMinRange, maxRange);
  };

  const updateGuess = (guess: number, min: number, max: number) => {
    setCurrentGuess(guess);
    setMinRange(min);
    setMaxRange(max);
    setGuessCount((prev) => prev + 1);

    if (parsedUserNumber === guess) {
      setGameState(GameState.GAME_OVER);
    } else if (min === max) {
      setErrorMessage(
        "Game over! Couldn't find your number. Did you change your mind?"
      );
      setGameState(GameState.GAME_OVER);
    }
  };

  const handlePlayAgain = () => {
    setGameState(GameState.START);
    setParsedUserNumber(0);
    setCurrentGuess(50);
    setGuessCount(0);
    setMinRange(1);
    setMaxRange(100);
  };

  return (
    <GameScreen
      currentGuess={currentGuess}
      guessCount={guessCount}
      gameState={gameState}
      errorMessage={errorMessage}
      onGuessLower={handleGuessLower}
      onGuessHigher={handleGuessHigher}
      onPlayAgain={handlePlayAgain}
    />
  );
}
