import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesMealScreenDetail from "./screens/CategoriesMealScreen";
import CategoriesMealScreen from "./screens/CategoriesMealScreen";
import CategoriesMealDetailScreen from "./screens/CategoriesMealDetailScreen";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen
            name="CategoriesMealScreen"
            component={CategoriesMealScreen}
          />
          <Stack.Screen
            name="CategoriesMealDetail"
            component={CategoriesMealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
