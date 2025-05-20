import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: "80%",
    fontSize: 20,
    fontWeight: "700",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Platform.OS === "ios" ? 5 : 0,
    minHeight: 56,
    minWidth: 120,
    marginVertical: 5,
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#FF9F43",
    ...(Platform.OS === "android" && { elevation: 5 }),
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#000",
  },
  text: {
    fontSize: 24,
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  primaryText: {
    color: "#FFFFFF",
  },
  secondaryText: {
    color: "#000",
  },
});
