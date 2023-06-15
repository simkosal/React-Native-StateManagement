import { FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import MealItem from "../components/MealsList/MealItem";
import MealItemListView from "../components/MealsList/MealItemListView";

const CategoriesMealScreen = ({ route, navigation }) => {
  const cateID = route.params.categoryID;

  // Query Meals base on CategoryID
  const disPlayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cateID) >= 0;
  });

  useEffect(() => {
    // Getting Category title
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == cateID
    ).title;

    // set AppBar Options

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cateID, navigation]);

  return <MealItemListView items={disPlayMeals} />;
};

export default CategoriesMealScreen;

const styles = StyleSheet.create({});
