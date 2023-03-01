import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButtons({ children, onPressHandler }) {
  //'children' is a react native prop obj.
  //'onPressHandler' is developer declared prop
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonPressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPressHandler}
        android_ripple={{ color: "#52012a" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

// 'pressed' is an in built object which determines whether the button is pressed or not.
