import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ShoppingCart, OrderDetails, BillScreen, HomeScreen, MainScreen } from "./src/screens"; // Adjust path as needed
import { AppProvider } from "./src/contexts/AppProvider";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "InknutAntiqua-Regular": require("./assets/fonts/InknutAntiqua-Regular.ttf"),
    "InknutAntiqua-SemiBold": require("./assets/fonts/InknutAntiqua-SemiBold.ttf"),
    "Inder-Regular": require("./assets/fonts/Inder-Regular.ttf"),
    "Lemon-Regular": require("./assets/fonts/Lemon-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="BillScreen" component={BillScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
