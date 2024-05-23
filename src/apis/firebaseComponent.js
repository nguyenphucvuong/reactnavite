import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ref, set, push, child, update, onValue } from 'firebase/database'

import { db } from '../../firebase.config'


const dbRef = ref(db);
const productRef = ref(db, "Product/");
const discountRef = ref(db, "Discount/");

const deleteOneData = (id) => {
    set(child(dbRef, "Product/" + id), null)
        .then(() => {
            return console.log("Data deleted successfully");
        })
        .catch((error) => {
            return console.log("Data deleted failed", error);
        });
};

const deleteDatas = (id) => {
    set(child(dbRef, "Product/" + id), null)
        .then(() => {
            return console.log("Data deleted successfully");
        })
        .catch((error) => {
            return console.log("Data deleted failed", error);
        });
};

const updateData = (id, tensp, mau, gia, soLuong, size, img) => {
    const updates = {};
    updates["Product/" + id] = {
        id: id,
        gia: gia,
        img: img,
        mau: mau,
        size: size,
        tensp: tensp,
        soLuong: soLuong,
    };
    update(ref(db), updates)
        .then(() => {
            return console.log("Data updated successfully");
        })
        .catch((error) => {
            return console.log("Data updated failed", error);
        });
}

const getAllData = (qlProduct) => {
    onValue(productRef, (snapshot) => {
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

const createOneData = ({ tensp, mau, gia, soLuong, size, img }) => {
    const key = push(child(dbRef, 'Product/')).key;
    const setDB = set(child(dbRef, "Product/" + key), {
        id: key,
        gia: gia,
        img: img,
        mau: mau,
        size: size,
        tensp: tensp,
        soLuong: soLuong,
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


export { createOneData, getAllData, updateData, deleteOneData, createOneDiscount, getAllDiscount };

const styles = StyleSheet.create({})
