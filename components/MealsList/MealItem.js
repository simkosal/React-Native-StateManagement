import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "../MealDetail";

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("CategoriesMealDetailScreen", {
      mealID: id,
    });
  }
  return (
    <View style={styles.parentView}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ press }) => (press ? styles.buttonPressed : null)}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.imageMeal} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
  parentView: {
    margin: 12,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  imageMeal: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 8,
  },
  detail: {
    flexDirection: "row",
    margin: 8,
  },
  detailItem: {
    marginHorizontal: 5,
    fontWeight: "500",
  },
});
