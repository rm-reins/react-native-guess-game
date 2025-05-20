import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F8FD",
  },
  textContainer: {
    flexDirection: "row",
    width: "60%",
  },
  title: {
    fontSize: 48,
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  dice: {
    color: "#FF9F43",
    marginBottom: 16,
    overflow: "visible",
    backgroundColor: "#FFF",
    borderRadius: 16,
  },
  titleDescription: {
    textAlign: "center",
    marginVertical: 24,
    fontSize: 24,
    fontFamily: "Quicksand-Medium",
    flexWrap: "wrap",
    width: "100%",
  },
  inputContainer: {
    width: "80%",
    borderRadius: 16,
    marginBottom: 24,
    padding: 16,
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Quicksand-Bold",
    backgroundColor: "#FFFFFF",
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
