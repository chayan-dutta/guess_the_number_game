import { useEffect, useState } from "react";
import { StyleSheet, View, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import CustomTitle from "../components/ui/CustomTitle";
import PrimaryButtons from "../components/ui/PrimaryButtons";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItems from "../components/game/GuessLogItems";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [guessRounds, setGuessRounds] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevRounds) => [newRndNumber, ...prevRounds]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []);

  const guessRoundListLength = guessRounds.length;

  return (
    <>
      <View style={styles.screen}>
        <CustomTitle>Oponent's Guess</CustomTitle>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.instructionTextStyle}>
            Higher or Lower?
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButtons
                onPressHandler={() => nextGuessHandler("greater")}
              >
                <Ionicons name="md-add" size={24} color="white" />
              </PrimaryButtons>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButtons onPressHandler={() => nextGuessHandler("lower")}>
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButtons>
            </View>
          </View>
        </Card>
        <View style={styles.listContainer}>
          {/* {guessRounds.map((guessRound) => (
            <Text key={guessRound}>{guessRound}</Text>
          ))} */}
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItems
                roundNumber={guessRoundListLength - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionTextStyle: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

//FlatList is used to render a list.
