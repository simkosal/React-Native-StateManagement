import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy_data";
import MealDetail from "../components/MealDetail";
import MealDetailDescription from "../components/MealDetailDescription";
import IconButton from "../components/IconButton";

const CategoriesMealDetailScreen = ({ route, navigation }) => {
  const mealID = route.params.mealID;
  console.log(mealID);

  // Meal Detail by ID
  const meal = MEALS.find((meal) => meal.id == mealID);

  function headerRightLoveButton() {
    console.log("Tap!");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="star"
            size={24}
            color="black"
            onPressed={headerRightLoveButton}
          ></IconButton>
        );
      },
    });
  }, [navigation, headerRightLoveButton]);

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetail
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
          parentStyle={styles.parentStyle}
          textStyle={styles.parentSubTextStyle}
        />
        <MealDetailDescription title="Ingredients" datas={meal.ingredients} />
        <MealDetailDescription title="Steps" datas={meal.steps} />
      </View>
    </ScrollView>
  );
};

export default CategoriesMealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 320,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    justifyContent: "center",
    padding: 10,
  },
  parentStyle: {
    justifyContent: "center",
  },
  parentSubTextStyle: {
    fontSize: 16,
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "700",
    justifyContent: "center",
  },
});
