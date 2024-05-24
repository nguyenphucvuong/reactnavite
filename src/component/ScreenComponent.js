import { StyleSheet, Text, View } from "react-native";
import { ShoppingCart, BillScreen, HomeScreen, WishListScreen } from "../screens";
import React from "react";

const ScreenComponent = (screen) => {
    console.log("first", screen)
    if (screen == "SHOPPING_CART") {
        return (
            <>
                <ShoppingCart />
            </>
        );
    } else if (screen == "WISHLIST_SCREEN") {
        return (
            <>
                <WishListScreen />
            </>
        );
    } else if (screen == "BILL_SCREEN") {
        return (
            <>
                <BillScreen />
            </>
        );
    } else {
        return (
            <>
                <HomeScreen />
            </>
        );
    }

};

export default ScreenComponent;

const styles = StyleSheet.create({});
