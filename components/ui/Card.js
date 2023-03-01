import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.cardContaioner}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContaioner: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#27063c",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
