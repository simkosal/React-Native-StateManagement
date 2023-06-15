import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealsIds] = useState([]);

  function addFavorite(id) {
    // Add New Meal with Existing
    setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    // Filter Meals != id
    setFavoriteMealsIds((currentFavIds) =>
      currentFavIds.filter((mealID) => mealID !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  // Can be Wrap all compents and the App
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoritesContextProvider;
