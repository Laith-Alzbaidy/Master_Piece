import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  continar: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    resizeMode: "contain",
  },
  textContainer: {
    marginTop: 20, // Adjust the spacing as needed
    marginRight: 20,
    marginLeft: 20,
    // alignItems: "flex-start", // Align content to the right
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1D1617",
    textAlign: "left",
  },
  description: {
    marginTop: 10, // Adjust the spacing as needed
    textAlign: "left", // Align the description to the right
    color: "#7B6F72",
    fontSize: 14,
    width: 315,
    lineHeight: 21,
    letterSpacing: 0.4,
  },
  btn: {
    // marginTop: 40, // Adjust the spacing as needed
    marginRight: 15,
    marginBottom: 10,
    alignSelf: "flex-end",
  },
});
