import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect, useCallback, useContext } from "react";
import { StyleSheet, View, Pressable, Text, FlatList, TextInput, Button, StatusBar, ScrollView, Alert } from "react-native"; // Import FlatList
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { FlatlistItemsComponent } from "../component";
import { CartManager, Cart, Discount, DiscountManager } from "../models"; // Import lớp quản lý sản phẩm
import { deleteOneCartData, createOneBill } from "../apis/firebaseComponent";
import { AppContext } from '../contexts/AppProvider';





const BillScreen = () => {
    const bill = useContext(AppContext).billData;
    // console.log("billl", bill.arrBill)
    const [arrList, setArrList] = useState([]);

    useEffect(() => {

        const interval = setInterval(() => {
            // cart.getAllData();
            setArrList(bill.arrBill);

        }, 100); // Refresh every 5 seconds

        return () => clearInterval(interval);
    }, [bill]);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleLSMH}>
                <Text style={styles.textTitle}>Lịch sử mua hàng</Text>
            </View>
            <FlatList
                data={arrList}
                renderItem={({ item }) => <FlatlistItemsComponent isBill={true} item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer} />
        </SafeAreaView>
    )
}

export default BillScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
    },

    titleLSMH: {
        width: "100%",
        height: 50,
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
    },
    textTitle: {
        fontSize: 20,
        color: "white",

    },
    flatListContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "white",
    },
})