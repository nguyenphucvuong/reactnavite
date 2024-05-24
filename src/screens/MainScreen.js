import { StyleSheet, View, Pressable, Text, StatusBar, FlatList, ScrollView, Button } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyles";
import { appInfo } from "../constains/appInfo";
import { FlatlistItemsComponent, ScreenComponent } from "../component";
import { Cart, CartManager } from "../models";
import { createOneData, getAllCartData, updateCartData, deleteOneCartData, createOneDiscount, createOneCartData } from "../apis/firebaseComponent";


const cart = new CartManager();
const SHOPPING_CART = "SHOPPING_CART";
const WISHLIST_SCREEN = "WISHLIST_SCREEN";
const BILL_SCREEN = "BILL_SCREEN";
const HOME_SCREEN = "HOME_SCREEN";

const [screen, setScreen] = useState(HOME_SCREEN);
const MainScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={{ height: "100%", width: "100%" }}>
                <ScreenComponent screen={screen} />
            </View>

            <View style={styles.menuContainer}>
                <Pressable
                    style={styles.homePage}
                    onPress={setScreen(HOME_SCREEN)}
                >
                    <Image
                        style={styles.iconMenu}
                        contentFit="cover"
                        source={require("../../assets/home-fill.png")}
                    />
                </Pressable>
                <Pressable
                    style={styles.shoppingCartPage}
                    onPress={setScreen(SHOPPING_CART)}
                >
                    <Image
                        style={styles.iconMenu}
                        contentFit="cover"
                        source={require("../../assets/basket-alt-3.png")}
                    />
                </Pressable>
                <Pressable
                    style={styles.wishListPage}
                    onPress={setScreen(WISHLIST_SCREEN)}
                >
                    <Image
                        style={styles.iconMenu}
                        contentFit="cover"
                        source={require("../../assets/favorite-fill.png")}
                    />
                </Pressable>
                <Pressable
                    style={styles.billPage}
                    onPress={setScreen(BILL_SCREEN)}
                >
                    <Image
                        style={styles.iconMenu}
                        contentFit="cover"
                        source={require("../../assets/message-fill.png")}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default MainScreen

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
})