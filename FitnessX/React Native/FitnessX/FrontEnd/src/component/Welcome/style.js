import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between", // Space between the center container and the bottom container
    paddingVertical: 20,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  image: {
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  containerText: {
    alignItems: "center",
    marginVertical: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1D1617",
    textAlign: "left",
  },
  description: {
    marginTop: 10,
    textAlign: "center",
    color: "#7B6F72",
    fontSize: 14,
    width: 250,
    lineHeight: 21,
    letterSpacing: 0.4,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 30,
    width: 300,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomContainer: {
    marginBottom: 10,
  },
});
