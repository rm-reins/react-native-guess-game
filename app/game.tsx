import { GameScreen } from "@/components/screens/GameScreen";
import { useLocalSearchParams } from "expo-router";
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

  useEffect(() => {
    if (userNumber) {
      setParsedUserNumber(parseInt(userNumber));

      const initialGuess = Math.floor(Math.random() * 100) + 1;
      setCurrentGuess(initialGuess);
      setGuessCount(1);
    }
  }, [userNumber]);

  useEffect(() => {
    if (gameState === GameState.PLAYING && minRange === maxRange) {
      setCurrentGuess(minRange);
      setGameState(GameState.GAME_OVER);
    }
  }, [gameState, minRange, maxRange]);

  const handleGuessLower = () => {
    const newMaxRange = currentGuess - 1;

    if (parsedUserNumber !== null && parsedUserNumber > currentGuess) {
      console.log("User number is higher than current guess");
      return;
    }

    if (newMaxRange < minRange) {
      console.log("No valid number in range");
      return;
    }

    const nextGuess = Math.floor((minRange + newMaxRange) / 2);
    updateGuess(nextGuess, minRange, newMaxRange);
  };

  const handleGuessHigher = () => {
    const newMinRange = currentGuess + 1;

    if (parsedUserNumber !== null && parsedUserNumber < currentGuess) {
      console.log("User number is lower than current guess");
      return;
    }

    if (newMinRange > maxRange) {
      console.log("No valid number in range");
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

    if (parsedUserNumber === guess || min === max) {
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
      onGuessLower={handleGuessLower}
      onGuessHigher={handleGuessHigher}
    />
  );
}
