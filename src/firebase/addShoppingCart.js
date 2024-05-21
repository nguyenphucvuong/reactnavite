import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
    addDoc,
    collection,
    getDocs,
    doc,
    DocumentData,
} from "firebase/firestore";


const todosCollection = collection(db, "todos");

export async function createTodosTask() {
    const newTodo = {
        title: "Learn React Native",
        completed: false,
    };
    const docRef = await addDoc(todosCollection, newTodo);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
}