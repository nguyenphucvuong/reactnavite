import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, StatusBar, FlatList, ScrollView, Button } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyles";
import { appInfo } from "../constains/appInfo";
import { FlatlistItemsComponent } from "../component";
import { Cart, CartManager } from "../models";
import { createOneData, getAllCartData, updateCartData, deleteOneCartData, createOneDiscount, createOneCartData } from "../apis/firebaseComponent";



const cart = new CartManager();
// dataProduct.forEach((item) => {
//   cart.addProduct(item.id, item.name, item.color, item.price, item.soLuong, item.size, item.img);
// })



const ShoppingCart = () => {
  const navigation = useNavigation();
  const [arrList, setArrList] = useState([]);



  const handleCreateOneData = () => {
    createOneCartData({
      username: 'admin@gmail.com',
      name: 'Áo thun',
      color: 'Đen',
      price: 100000,
      quantiny: 10,
      size: 'M',
      img: 'https://pubcdn.ivymoda.com/files/news/2023/08/02/4534c5d0192bbc110f62a896f433eef0.png',
    })
  };

  const handleRemoveProduct = (id) => {
    const updatedList = arrList.filter(item => item.id !== id);
    setArrList(updatedList);
    cart.arrPro = updatedList;
  };

  useEffect(() => {

    const interval = setInterval(() => {
      cart.getAllData();
      setArrList(cart.arrPro);
    }, 1000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (

    <View style={styles.container}>
      {/* slogan */}
      <View style={styles.sloganInner}>
        <Text style={styles.sloganText}>
          Choose happiness, choose clothes.
        </Text>

      </View>
      {/* text nhóm */}
      <View style={styles.vNhom5}>
        <Text style={styles.textNhom5}>{`Nhóm 5`}</Text>
      </View>

      {/* Title page */}
      <View style={styles.vShoppingCart1}>
        <Text style={styles.shoppingCart1}>SHOPPING CART</Text>
      </View>


      {/* flatlist */}
      <View style={styles.flatcontainer}>
        <FlatList
          data={arrList}
          renderItem={({ item }) => <FlatlistItemsComponent isDetail={false} item={item} cart={cart} handleRemoveProduct={handleRemoveProduct} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      {/* Nút mua ngay dưới cùng */}
      <View style={styles.btnContainer}>
        <Button
          title="test"
          style={styles.muaNgaybtn}
          color={"red"}
          onPress={() => handleCreateOneData()}
        >
          {/* <Text style={styles.muaNgayText}>Mua ngay</Text> */}
        </Button>
        <Button
          title="Mua ngay"
          style={styles.muaNgaybtn}
          color={Color.colorLightgreen}
          onPress={() => navigation.navigate("OrderDetails", { productList: cart.arrPro })}
        >
          {/* <Text style={styles.muaNgayText}>Mua ngay</Text> */}
        </Button>
      </View>



      {/* Menu các page */}
      <View style={styles.menuContainer}>
        <Pressable
          style={styles.homePage}
        // onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={styles.iconMenu}
            contentFit="cover"
            source={require("../../assets/home-fill.png")}
          />
        </Pressable>
        <Pressable
          style={styles.shoppingCartPage}
          onPress={() => navigation.navigate("ShoppingCart")}
        >
          <Image
            style={styles.iconMenu}
            contentFit="cover"
            source={require("../../assets/basket-alt-3.png")}
          />
        </Pressable>
        <Pressable
          style={styles.wishListPage}
        // onPress={() => navigation.navigate("WishList")}
        >
          <Image
            style={styles.iconMenu}
            contentFit="cover"
            source={require("../../assets/favorite-fill.png")}
          />
        </Pressable>
        <Pressable
          style={styles.contactPage}
        // onPress={() => navigation.navigate("Contact")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  sloganInner: {
    height: 25,
    backgroundColor: Color.colorPink,
    width: "100%",
    marginBottom: 10,
  },
  sloganText: {
    // fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorWhite,
    fontSize: 17,
    textAlign: "center",
  },
  textNhom5: {
    // fontFamily: FontFamily.inknutAntiquaSemiBold,
    color: Color.colorLightpink,
    width: "100%",
    textAlign: "center",

    fontSize: 17,
    fontStyle: "italic",
  },
  vNhom5: {},
  shoppingCart1: {
    color: Color.colorBlack,
    // fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  vShoppingCart1: {
    marginTop: 20,
    paddingBottom: 15,
  },
  flatListContainer: {
    flexGrow: 1,
  },
  flatcontainer: {
    height: "75%",
  },
  btnContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    // backgroundColor: Color.colorLightgreen,
    height: 40,
    justifyContent: 'center',
  },


  muaNgaybtn: {
    paddingTop: 10,
    paddingBottom: 10,
    // color: Color.colorLightgreen,
    // backgroundColor: Color.colorLightgreen,
  },
  muaNgayText: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    // fontFamily: FontFamily.interBold,
  },

  // vBtnMuaNgay: {
  //   backgroundColor: Color.colorLightgreen,
  //   height: 40,
  //   justifyContent: 'center',
  // },

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
  contactPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconMenu: {
    width: 24,
    height: 24,
  },
});

export default ShoppingCart;
