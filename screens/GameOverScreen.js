import { Text, View, Image, StyleSheet } from "react-native";

import CustomTitle from "../components/ui/CustomTitle";
import PrimaryButtons from "../components/ui/PrimaryButtons";

export default function GameOverScreen({
  roundNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.rootContainer}>
      <CustomTitle>GAME OVER!</CustomTitle>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightedText}>{roundNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlightedText}>{userNumber}</Text>
      </Text>
      <PrimaryButtons onPressHandler={onStartNewGame}>
        Start New Game
      </PrimaryButtons>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 160,
    height: 320,
    width: 320,
    borderColor: "#343434",
    borderWidth: 5,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  highlightedText: {
    fontWeight: "bold",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
});
