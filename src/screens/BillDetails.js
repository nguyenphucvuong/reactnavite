import * as React from "react";
import { StyleSheet, View, Pressable, Text, FlatList, TextInput, Button, StatusBar, ScrollView, Alert } from "react-native"; // Import FlatList
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize } from "../../GlobalStyles";
import { FlatlistItemsComponent } from "../component";
import { SafeAreaView } from 'react-native-safe-area-context'

const BillDetails = () => {
    const navigation = useNavigation();

    //thông tin địa chỉ
    const [nameCus, setNameCus] = React.useState("");
    const [addressCus, setAddressCus] = React.useState("");
    const [phoneCus, setPhoneCus] = React.useState("");
    const [note, setNote] = React.useState("");

    const [isPaymentOnDelivery, setIsPaymentOnDelivery] = React.useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.chiTietDathangInner]}>
                <Text style={styles.chiTietDatHangText}>Thông tin đơn hàng</Text>

                <Pressable onPress={() => navigation.navigate("ShoppingCart")}>
                    <Image
                        style={styles.backIconBtn}
                        contentFit="cover"
                        source={require("../../assets/arrow-left.png")}
                    />
                </Pressable>
            </View>


            {/* Flatlist */}
            <View>
                <FlatList
                    contentContainerStyle={styles.flatListContainer}
                    ListHeaderComponent={
                        <>
                            {/* BillStatusComponent */}
                            <View style={{
                                width: "100%",
                                height: 120,
                                flexDirection: "row",
                                backgroundColor: "#84ED89",
                                marginBottom: "2%",
                                shadowColor: "black",
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 10,
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    width: "85%",
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        color: "black",
                                        marginLeft: "5%",
                                        marginBottom: "2%",
                                    }}>
                                        Đơn hàng:
                                    </Text>
                                    <Text style={{
                                        fontSize: 20,
                                        color: "black",
                                        marginLeft: "5%",
                                        marginBottom: "2%",
                                    }}>
                                        Trạng thái:
                                    </Text>
                                    <Text style={{
                                        fontSize: 20,
                                        color: "black",
                                        marginLeft: "5%",
                                        marginBottom: "2%",
                                    }}>
                                        Tổng tiền:
                                    </Text>
                                </View>

                                <Image style={{
                                    width: "15%",
                                    height: 40,
                                    width: 40,
                                    alignSelf: "center",
                                }} source={require("../../assets/billdone.png")} />

                            </View>

                            {/* AddressViewComponent */}
                            <View style={{
                                width: "100%",
                                height: 150,
                                justifyContent: "center",
                                borderRadius: 10,
                                backgroundColor: "white",
                                shadowColor: "black",
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 10,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    marginLeft: "5%",
                                }}>
                                    <Image style={{
                                        height: 20,
                                        width: 20,
                                    }} source={require("../../assets/Pin_alt.png")} />
                                    <Text style={{
                                        fontSize: 20,
                                        color: "black",
                                        marginLeft: "2%",
                                        marginBottom: "2%",
                                        fontWeight: "bold",
                                    }}>

                                        Địa chỉ nhận hàng
                                    </Text>
                                </View>

                                <Text style={{
                                    fontSize: 15,
                                    color: "gray",
                                    marginLeft: "5%",
                                    marginBottom: "2%",
                                }}>
                                    Họ tên:
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    color: "gray",
                                    marginLeft: "5%",
                                    marginBottom: "2%",
                                }}>
                                    SDT:
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    color: "gray",
                                    marginLeft: "5%",
                                    marginBottom: "2%",
                                }}>
                                    Địa chỉ:
                                </Text>

                            </View>
                        </>
                    }
                    ListFooterComponent={
                        <>
                            <View style={styles.priceContainer}>
                                <View style={styles.priceLeft}>
                                    <Text style={styles.priceText}>Tiền hàng:</Text>
                                    <Text style={styles.priceText}>Mã giảm giá:</Text>
                                    <Text style={styles.priceText}>Tổng tiền:</Text>
                                </View>
                                <View style={styles.priceRight}>
                                    <Text style={styles.priceText}>{ }đ</Text>
                                    <Text style={styles.priceText}>{ }đ</Text>
                                    <Text style={styles.priceText}>{ }đ</Text>
                                </View>
                            </View>
                            <Text
                                style={{
                                    borderWidth: 1,
                                    borderColor: Color.colorBlack,
                                    backgroundColor: "white",
                                    borderRadius: 5,
                                    marginTop: 10,
                                    paddingHorizontal: 10,
                                    height: "auto",
                                    minHeight: 100,

                                }}
                                placeholder="Ghi chú"
                                value={note}
                                onChangeText={(text) => setNote(text)} >

                                Ghi chú
                            </Text>
                        </>

                    } />
            </View>




        </SafeAreaView>
    )
}

export default BillDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorWhite,
    },

    chiTietDathangInner: {

        height: 48,
        width: "100%",
        backgroundColor: Color.colorPink,
    },
    chiTietDatHangText: {
        left: "15%",
        fontSize: 24,
        textAlign: "left",
        // fontFamily: FontFamily.interRegular,
        color: Color.colorBlack,
        top: 7,
    },
    backIconBtn: {
        width: 24,
        height: 24,
        bottom: "90%",
        left: "5%",
    },
    flatListContainer: {
        // flexGrow: 1,
        // marginTop: 10,
        // paddingHorizontal: 20,
        // paddingTop: 20,
        // paddingBottom: 10,
        // backgroundColor: "white",
    },
    priceContainer: {
        marginTop: "2%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        shadowColor: Color.colorBlack,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    priceLeft: {
        flexDirection: 'column',
    },
    priceRight: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    priceText: {
        fontSize: FontSize.size_base,
        // fontFamily: FontFamily.interRegular,
        marginBottom: 5,
        color: Color.colorBlack,
    },
})