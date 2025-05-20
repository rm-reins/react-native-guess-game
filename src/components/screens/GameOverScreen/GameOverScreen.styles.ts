import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FD",
  },
  iconContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontFamily: "Quicksand-Bold",
    marginBottom: 8,
    color: "#2E3A59",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 24,
    fontSize: 20,
    color: "#2E3A59",
    fontFamily: "Quicksand-Medium",
  },
  numberContainer: {
    backgroundColor: "#4FC1E9",
    width: 128,
    height: 128,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: "#000",
    alignContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  number: {
    color: "#FFFFFF",
    fontSize: 68,
    fontFamily: "Quicksand-Bold",
    includeFontPadding: false,
  },
  stats: {
    textAlign: "center",
    marginBottom: 32,
    color: "#2E3A59",
    fontSize: 18,
    fontFamily: "Quicksand-Medium",
  },
});
