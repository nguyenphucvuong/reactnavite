import React, { useState } from "react";
import { StyleSheet, View, Pressable, StatusBar } from "react-native";
import { Image } from "expo-image";
import ScreenComponent from "../component/ScreenComponent"; // Adjust the path based on your project structure
import { Cart, CartManager, Discount, DiscountManager } from "../models";
import { ShoppingCart, BillScreen, HomeScreen, OrderDetails, WishListScreen } from "../screens"; // Adjust the path based on your project structure

const cartManager = new CartManager();
const discountManager = new DiscountManager();
cartManager.getAllData();
discountManager.getAllDiscount();
const MainScreen = (screenid) => {
    const SHOPPING_CART = "SHOPPING_CART";
    const WISHLIST_SCREEN = "WISHLIST_SCREEN";
    const BILL_SCREEN = "BILL_SCREEN";
    const HOME_SCREEN = "HOME_SCREEN";

    const [screen, setScreen] = useState(HOME_SCREEN);


    return (

        < View style={styles.container} >

            <View style={{ height: "100%", width: "100%" }}>
                {/* <ScreenComponent screen={screen} cartManager={cartManager} discountManager={discountManager} /> */}
                {screen === "SHOPPING_CART" && <ShoppingCart />}
                {screen === "WISHLIST_SCREEN" && <WishListScreen />}
                {screen === "BILL_SCREEN" && <BillScreen />}
                {screen === "HOME_SCREEN" && <HomeScreen />}
            </View>

            <View style={styles.menuContainer}>
                <Pressable
                    style={styles.homePage}
                    onPress={() => setScreen(HOME_SCREEN)}
                >
                    <Image
                        style={styles.iconMenu}
                        contentFit="cover"
                        source={require("../../assets/home-fill.png")}
                    />
                </Pressable>
                <Pressable
                    style={styles.shoppingCartPage}
                    onPress={() => setScreen(SHOPPING_CART)}
                >
                    <Image
                        style={styles.iconMenu}
                        contentFit="cover"
                        source={require("../../assets/basket-alt-3.png")}
                    />
                </Pressable>
                <Pressable
                    style={styles.wishListPage}
                    onPress={() => setScreen(WISHLIST_SCREEN)}
                >
                    <Image
                        style={styles.iconMenu}
                        contentFit="cover"
                        source={require("../../assets/favorite-fill.png")}
                    />
                </Pressable>
                <Pressable
                    style={styles.billPage}
                    onPress={() => setScreen(BILL_SCREEN)}
                >
                    <Image
                        style={styles.iconMenu}
                        contentFit="cover"
                        source={require("../../assets/message-fill.png")}
                    />
                </Pressable>
            </View>
        </View >
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 40,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
    },
    homePage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    shoppingCartPage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    wishListPage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    billPage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    iconMenu: {
        width: 24,
        height: 24,
    },
});
