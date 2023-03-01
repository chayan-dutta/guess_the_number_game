import { useState } from "react";
import { Alert, StyleSheet, TextInput, View, Text } from "react-native";

import PrimaryButtons from "../components/ui/PrimaryButtons";
import CustomTitle from "../components/ui/CustomTitle";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputField = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    var chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputField },
      ]);
      return;
    }
    props.onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <CustomTitle>Guess My Number</CustomTitle>
      <Card>
        <InstructionText>Enter A Number</InstructionText>
        <TextInput
          style={styles.inputStyle}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPressHandler={resetInputField}>
              Reset
            </PrimaryButtons>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPressHandler={confirmInputHandler}>
              Confirm
            </PrimaryButtons>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputStyle: {
    width: 50,
    height: 50,
    fontSize: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
