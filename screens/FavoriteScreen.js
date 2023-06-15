import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealItemListView from "../components/MealsList/MealItemListView";
import { FavoriteContext } from "../store/context/Favorites-context";
import { MEALS } from "../data/dummy_data";

const FavoriteScreen = () => {
  const favoriteMealsCtx = useContext(FavoriteContext);

  // Query all the meals from MEALS Dummy data that have all the [ids]
  const favoriteMEals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  // No Favorite Meal View
  if (favoriteMEals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.noDataView}>
          No Favorite Meal yet!, Please add your favor
        </Text>
      </View>
    );
  }

  return <MealItemListView items={favoriteMEals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noDataView: {
    fontWeight: "500",
    fontSize: 16,
  },
});
