import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CateogryGridTile = ({ title, color, onPressed }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPressed}
        android_ripple={{ color: "#ccc" }}
        style={({ press }) => [
          styles.button,
          press ? styles.buttonPressed : null,
        ]}
      >
        <View
          style={
            ([styles.innerGridItem],
            {
              backgroundColor: color,
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              borderRadius: 8,
            })
          }
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CateogryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerGridItem: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
