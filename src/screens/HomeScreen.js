import { StyleSheet, View, Pressable, Text, StatusBar, FlatList, ScrollView, Button } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyles";
import { appInfo } from "../constains/appInfo";
import { FlatlistItemsComponent, ScreenComponent } from "../component";
import { Cart, CartManager } from "../models";
import { createOneData, getAllCartData, updateCartData, deleteOneCartData, createOneDiscount, createOneCartData } from "../apis/firebaseComponent";


const cart = new CartManager();
const SHOPPING_CART = "SHOPPING_CART";
const ORDER_DETAILS = "ORDER_DETAILS";
const BILL_SCREEN = "BILL_SCREEN";
const HOME_SCREEN = "HOME_SCREEN";

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink"
    },

})