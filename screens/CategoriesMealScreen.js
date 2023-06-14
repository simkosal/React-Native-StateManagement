import { FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy_data";
import MealItem from "../components/MealItem";

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

  function renderMealItem(itemData) {
    const data = itemData.item;

    const objProp = {
      id: data.id,
      title: data.title,
      imageUrl: data.imageUrl,
      duration: data.duration,
      complexity: data.complexity,
      affordability: data.affordability,
    };
    return <MealItem {...objProp} />;
  }
  return (
    <FlatList
      data={disPlayMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
};

export default CategoriesMealScreen;

const styles = StyleSheet.create({});
