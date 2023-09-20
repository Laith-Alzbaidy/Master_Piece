import { View, Text, StyleSheet } from "react-native";
import { DataContext } from "../../context";
import { useContext } from "react";

const textError = () => {
  // const { error } = useContext(DataContext);
  return (
    <View>
      {/* <Text style={styles.textError}>{error.error && error.error}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textError: {
    color: "red",
  },
});

export default textError;
