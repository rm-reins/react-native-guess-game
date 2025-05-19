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
    flexWrap: "wrap",
    width: "60%",
  },
  title: {
    fontSize: 48,
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
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
  },
  inputContainer: {
    width: "80%",
    borderRadius: 16,
    marginBottom: 24,
    padding: 16,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Quicksand-Bold",
    backgroundColor: "#FFFFFF",
  },
  error: {
    color: "#EF4444",
    fontFamily: "Quicksand-Bold",
    marginBottom: 16,
    textAlign: "center",
    fontSize: 14,
  },
});
