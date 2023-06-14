import { View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy_data";
import CateogryGridTile from "../components/CateogryGridTile";

// Create Innner function
// renderCategories Items

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function onPressHandler() {
      navigation.navigate("CategoriesMealScreen", {
        categoryID: itemData.item.id,
      });
    }
    return (
      <CateogryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPressed={onPressHandler}
      ></CateogryGridTile>
    );
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderCategoryItem}
      />
    </View>
  );
}

export default CategoriesScreen;
