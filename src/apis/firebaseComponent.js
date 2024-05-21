import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ref, set, push, child, update, onValue } from 'firebase/database'

import { db } from '../../firebase.config'


const dbRef = ref(db);
const productRef = ref(db, "Product/");



const updateData = () => {
    const updates = {};
    updates["Product/" + id] = {
        id: id,
        userName: name,
        email: email,
        imageUrl: imageUrl,
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

const createOneData = ({ tensp, mau, gia, soLuong, size, img }) => {


    const key = push(child(dbRef, 'Product/')).key;
    console.log(key)
    const childDV = child(dbRef, 'Product/' + key);
    console.log(childDV)

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

export { createOneData, getAllData, updateData };

const styles = StyleSheet.create({})