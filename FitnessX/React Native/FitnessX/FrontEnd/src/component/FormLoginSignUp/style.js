import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  containerScreen: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 28,
    paddingBottom: 20,
  },
  containerHeader: {
    alignItems: "center",
    marginVertical: 30,
  },
  textTitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F7F8F8",
    backgroundColor: "#f7f8f8",
    borderRadius: 14,
    marginVertical: 5,
    alignItems: "center",
    alignSelf: "center",
    height: 48,
  },
  icon: {
    marginHorizontal: 15,
    color: "#7B6F72",
  },
  eye: {
    marginRight: 15,
    color: "#7B6F72",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    fontSize: 12,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 30,
    width: 300,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDDADA",
    marginHorizontal: 5,
  },
  textLine: {
    fontSize: 12,
    fontWeight: "bold",
  },
  containerIconSignUp: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
  },
  iconButton: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: "#DDDADA",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    textAlign: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 20,
  },
  checkbox: {
    backgroundColor: "transparent",
    padding: 0,
    marginRight: 10,
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 10,
    color: "#ADA4A5",
  },
  lableLogin: {
    flex: 1,
    fontSize: 10,
    color: "#ADA4A5",
    alignSelf: "center",
    marginVertical: 10,
    textDecorationLine: "underline",
  },
  
});
