import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealItemListView({ items }) {
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
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
}

export default MealItemListView;

const styles = StyleSheet.create({});
