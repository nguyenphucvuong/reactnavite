// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Dnx3yiEyNk7XK4FTVySa75rlB_7QW3k",
  authDomain: "api-vuong.firebaseapp.com",
  databaseURL: "https://api-vuong-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "api-vuong",
  storageBucket: "api-vuong.appspot.com",
  messagingSenderId: "794914273489",
  appId: "1:794914273489:web:674d8d4b80def6d50cadf0",
  measurementId: "G-92J0PBJ42R"


  // apiKey: "AIzaSyAeYV3Gqqgw6M8bqyRI5RIDt3M1_290MoI",
  // authDomain: "quanlybanhang-39e95.firebaseapp.com",
  // projectId: "quanlybanhang-39e95",
  // storageBucket: "quanlybanhang-39e95.appspot.com",
  // messagingSenderId: "204492532167",
  // appId: "1:204492532167:web:7efb111329fd2c16af51e2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
// const analytics = getAnalytics(app);