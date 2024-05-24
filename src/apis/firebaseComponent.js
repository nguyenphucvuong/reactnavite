import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ref, set, push, child, update, onValue } from 'firebase/database'

import { db } from '../../firebase.config'


const dbRef = ref(db);
const cartRef = ref(db, "Cart/");
const discountRef = ref(db, "Discount/");

const deleteOneCartData = (id) => {
    set(child(dbRef, "Cart/" + id), null)
        .then(() => {
            return console.log("Data deleted successfully");
        })
        .catch((error) => {
            return console.log("Data deleted failed", error);
        });
};

const deleteAllCartData = () => {
    set(child(dbRef, "Cart/"), null)
        .then(() => {
            return console.log("Data deleted successfully");
        })
        .catch((error) => {
            return console.log("Data deleted failed", error);
        });
};

const updateCartData = (id, username, name, color, price, quantiny, size, img) => {
    const updates = {};
    updates["Cart/" + id] = {
        id: id,
        username: username,
        price: price,
        img: img,
        color: color,
        size: size,
        name: name,
        quantiny: quantiny,
    };
    update(ref(db), updates)
        .then(() => {
            return console.log("Data updated successfully");
        })
        .catch((error) => {
            return console.log("Data updated failed", error);
        });
}

const getAllCartData = (qlProduct) => {
    onValue(cartRef, (snapshot) => {
        const data = snapshot.val();
        const dataArray = Object.values(data || {});
        qlProduct = dataArray
        return console.log("qlProduct", qlProduct);
    });
};

const getAllDiscount = () => {
    onValue(discountRef, (snapshot) => {
        const data = snapshot.val();
        const dataArray = Object.values(data || {});
        // console.log(dataArray)
        return dataArray;
    });
};

const createOneCartData = ({ username, name, color, price, quantiny, size, img }) => {
    const key = push(child(dbRef, 'Cart/')).key;
    const setDB = set(child(dbRef, "Cart/" + key), {
        id: key,
        username: username,
        price: price,
        img: img,
        color: color,
        size: size,
        name: name,
        quantiny: quantiny,
    }).then(() => {
        return console.log('data saved successfully')
    }).catch((e) => {
        console.log('data fail ', e)
    });
    return console.log(setDB)
}

const createOneDiscount = ({ code, percent }) => {
    const key = push(child(dbRef, 'Discount/')).key;
    const setDB = set(child(dbRef, "Discount/" + key), {
        id: key,
        code: code,
        percent: percent,
    }).then(() => {
        return console.log('data saved successfully')
    }).catch((e) => {
        console.log('data fail ', e)
    });
    return console.log(setDB)
}


export { createOneCartData, getAllCartData, updateCartData, deleteOneCartData, createOneDiscount, getAllDiscount, deleteAllCartData };

const styles = StyleSheet.create({})
