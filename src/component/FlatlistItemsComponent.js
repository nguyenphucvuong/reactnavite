import { StyleSheet, View, Pressable, Text, StatusBar, FlatList, ScrollView, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { appInfo } from "../constains/appInfo";
// import { FlatList } from 'react-native-gesture-handler';
import { Image } from "expo-image";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyles";


import { createOneData, getAllData, updateData, deleteOneData } from "../apis/firebaseComponent";




const FlatlistItemsComponent = ({ isDetail, item, handleRemoveProduct }) => {
    // dataProduct.forEach((item) => {
    //     qlProduct.addProduct(item.id, item.tensp, item.mau, item.gia, item.soLuong, item.size, item.img);
    // })

    // ShoppingCart functions 
    // dataProduct.forEach((items) => {
    //     if (items.id == item.id) {
    //         items.soLuong++;
    //         dataProduct.find(item => item.id == item.id).soLuong = items.soLuong++;

    //     }
    // }
    // );
    // console.log(dataProduct.find(item => item.id == item.id).soLuong);


    const [quantity, setQuantity] = useState(item.soLuong);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            // item.decreaseSoLuong();
            const soLuongNew = item.soLuong - 1;
            item.soLuong = soLuongNew;
            updateData(item.id, item.tensp, item.mau, item.gia, soLuongNew, item.size, item.img);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        // item.increaseSoLuong();
        const soLuongNew = item.soLuong + 1;
        item.soLuong = soLuongNew;
        updateData(item.id, item.tensp, item.mau, item.gia, soLuongNew, item.size, item.img);

    };

    const RemoveProduct = () => {
        handleRemoveProduct(item.id);
        deleteOneData(item.id);
    };







    // OrderDetails functions 



    return isDetail ? (
        <View style={{
            height: "auto",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            borderRadius: 10,
            backgroundColor: "white",
            shadowColor: "black",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
        }}>
            <View style={{
                flex: 1,
                padding: 10,
            }}>
                <Text style={{
                    fontSize: FontSize.size_base,

                    marginBottom: 5,
                }}>{item.tensp}</Text>
                <Text style={{
                    fontSize: 12,
                    color: Color.colorDarkgray_200,
                }}>Phân loại: {item.mau}, {item.size}</Text>
                <Text style={{
                    fontSize: 12,
                    color: Color.colorDarkgray_200,
                }}>Số lượng: {item.soLuong}</Text>
                <Text style={{
                    fontSize: 15,
                    color: "red",
                }}>Giá: {item.soLuong * item.gia}đ</Text>
            </View>
            <Image style={{
                width: 150,
                height: "95%",
                // borderTopRightRadius: 10,
                // borderBottomRightRadius: 10,
                borderRadius: 100,
            }} source={{ uri: item.img }} />
        </View>
    ) : (

        <View style={{
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: Color.colorGainsboro,
            borderRadius: 20,
            backgroundColor: Color.colorPink,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginBottom: 5,
            shadowColor: Color.colorBlack,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 7,
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{ marginRight: 10, }}>
                    <Image style={{
                        height: 86,
                        width: 86,
                        borderRadius: Border.br_11xl,
                    }} source={{ uri: item.img }} />
                </View>
                <View style={{ width: "65%" }}>
                    <Text style={{
                        fontSize: FontSize.size_base,
                        color: "black",
                        marginBottom: 4,
                    }}>{item.tensp}</Text>
                    <Text style={{
                        fontSize: FontSize.size_xs,
                        color: Color.colorDarkgray_200
                    }}>Phân Loại: {item.size}, {item.mau}</Text>
                    <Text style={{
                        fontSize: FontSize.size_xs,
                        color: Color.colorDarkgray_200,
                    }}>Giá: {item.soLuong * item.gia}đ</Text>
                    <View style={{
                        height: 23,
                        width: 70,
                        borderWidth: 1,
                        borderColor: Color.colorDarkgray_200,
                        borderRadius: Border.br_6xs,
                        backgroundColor: Color.colorPink,
                        borderStyle: "solid",
                        flexDirection: 'row',
                        justifyContent: 'space-between', // Thay đổi giá trị của justifyContent
                        alignItems: 'center',
                    }}>
                        <Pressable onPress={decreaseQuantity}>
                            <Text style={{
                                fontSize: FontSize.size_smi,
                                // fontFamily: FontFamily.interMedium,
                                fontWeight: "500",
                                color: Color.colorBlack,
                            }}>    -</Text>
                        </Pressable>
                        <Text style={{
                            fontSize: FontSize.size_smi,
                            // fontFamily: FontFamily.interMedium,
                            fontWeight: "500",
                            color: Color.colorBlack,
                        }}>{item.soLuong}</Text>
                        <Pressable onPress={increaseQuantity}>
                            <Text style={{
                                fontSize: FontSize.size_smi,
                                // fontFamily: FontFamily.interMedium,
                                fontWeight: "500",
                                color: Color.colorBlack,
                            }}>+   </Text>
                        </Pressable>
                    </View>
                </View>

            </View>
            <Pressable onPress={RemoveProduct}>
                <Image style={{
                    height: 24,
                    width: 24,
                }} source={require("../../assets/trash.png")} />
            </Pressable>

        </View>
    )
}

export { FlatlistItemsComponent }

const styles = StyleSheet.create({})