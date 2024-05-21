// readDataShoppingCart.js
import { collection, getDocs } from 'firebase/firestore';
import { dbFirestore, db, firebase } from '../../firebase.config';
import QLProduct from '../../QLProduct.js';
import { getDatabase, ref, set, get, onValue } from "firebase/database";

// const qlProduct = new QLProduct();

// function writeUserData(masp, tensp, mau, gia, soLuong, size, img) {
//     const db = getDatabase();

//     set(ref(db, 'Product/' + masp), {
//         tensp: tensp,
//         mau: mau,
//         gia: gia,
//         soLuong: soLuong,
//         size: size,
//         img: img
//     });
// }

const readShoppingCart = async (qlProduct) => {
    const getData = firebase.collection('Product');
    dbFirestore.collection('Product').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            qlProduct.addProduct(doc.id, data.tensp, data.mau, data.gia, data.soLuong, data.size, data.img);
        });
    });
    console.log("a", qlProduct)
};


export { readShoppingCart };