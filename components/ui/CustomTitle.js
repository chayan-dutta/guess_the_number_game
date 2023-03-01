import { Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function CustomTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: colors.fontColor,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    padding: 12,
    borderColor: colors.fontColor,
  },
});
