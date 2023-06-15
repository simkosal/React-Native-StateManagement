import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesMealScreen from "./screens/CategoriesMealScreen";
import CategoriesMealDetailScreen from "./screens/CategoriesMealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import IconButton from "./components/IconButton";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: "#3f2f25",
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <IconButton name={"list"} color={color} size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <IconButton name={"star"} color={color} size={22} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <>
      {/* <StatusBar style="dark" /> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="CategoriesMealScreen"
            component={CategoriesMealScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="CategoriesMealDetailScreen"
            component={CategoriesMealDetailScreen}
            options={{
              title: "Detail",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
