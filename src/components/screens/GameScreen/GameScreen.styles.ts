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
  guessText: {
    fontSize: 48,
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
  },
});
