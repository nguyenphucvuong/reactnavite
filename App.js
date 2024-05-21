const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ShoppingCart from "./src/screens/ShoppingCart";
import OrderDetails from "./src/screens/OrderDetails";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

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
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ShoppingCart"
              component={ShoppingCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderDetails"
              component={OrderDetails}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="Contact"
              component={Contact}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            /> */}

          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
