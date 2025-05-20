import { StartGameScreen } from "@/components/screens/StartGameScreen";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const handleStart = (userNumber: number) => {
    router.push({
      pathname: "/game",
      params: { userNumber },
    });
  };

  return <StartGameScreen onStart={handleStart} />;
}
