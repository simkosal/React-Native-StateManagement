import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const IconButton = ({ name, size, color, onPressed }) => {
  return (
    <Pressable
      onPress={onPressed}
      style={({ pressed }) => pressed && styles.onPressedButton}
    >
      <FontAwesome name={name} size={size} color={color} onPress={onPressed} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  onPressedButton: {
    opacity: 0.7,
  },
});
