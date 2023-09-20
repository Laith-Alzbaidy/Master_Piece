import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

function aaaaaaaaaaaa() {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="First Name"
        onChangeText={(text) => handleInputChange("firstName", text)}
        style={{ borderWidth: 1, padding: 10, width: 200, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Last Name"
        onChangeText={(text) => handleInputChange("lastName", text)}
        style={{ borderWidth: 1, padding: 10, width: 200, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => handleInputChange("email", text)}
        style={{ borderWidth: 1, padding: 10, width: 200, marginBottom: 10 }}
      />
      <Button title="Submit" onPress={handleSubmit} />

      {submittedData && (
        <View style={{ marginTop: 20 }}>
          <Text>Submitted Data:</Text>
          {Object.entries(submittedData).map(([fieldName, value], index) => (
            <Text key={index}>
              {fieldName}: {value}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

export default aaaaaaaaaa;
