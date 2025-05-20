import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FD",
  },
  title: {
    fontSize: 36,
    fontFamily: "Quicksand-Bold",
    marginBottom: 24,
    color: "#2E3A59",
  },
  guessContainer: {
    backgroundColor: "#4FC1E9",
    width: 128,
    height: 128,
    fontFamily: "Quicksand-Bold",
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  guessNumber: {
    fontSize: 68,
    color: "#FFFFFF",
    fontFamily: "Quicksand-Bold",
  },
  stats: {
    color: "#A0AEC0",
    textAlign: "center",
    fontFamily: "Quicksand-Medium",
    marginTop: 16,
    fontSize: 20,
  },
  statsBold: {
    fontFamily: "Quicksand-Bold",
    color: "#888",
  },
  errorContainer: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    padding: 16,
    borderRadius: 8,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 0, 0, 0.3)",
    width: "80%",
  },
  errorText: {
    fontFamily: "Quicksand-Medium",
    color: "#d32f2f",
    fontSize: 18,
    textAlign: "center",
  },
});
