import Product from "./Product";
import { ref, set, push, child, update, onValue } from 'firebase/database'

import { db } from './firebase.config'

class QLProduct {

  constructor() {
    this.arrPro = [];

  }

  getArrPro() {
    return this.arrPro;
  }

  setArrPro(value) {
    this.arrPro = value;
  }

  addProduct(id, tensp, mau, gia, soLuong, size, img) {
    const newProduct = new Product(id, tensp, mau, gia, soLuong, size, img);
    this.arrPro.push(newProduct);
  }


  removeProduct(id) {
    for (let i = 0; i < this.arrPro.length; i++) {
      if (this.arrPro[i].getid() === id) {
        this.arrPro.splice(i, 1);
        return;
      }
    }
  }

  getTotalValue() {
    let totalValue = 0;
    for (let i = 0; i < this.arrPro.length; i++) {
      totalValue += this.arrPro[i].gia * this.arrPro[i].soLuong;
    }
    return totalValue;
  }

  getAllData() {
    const dbRef = ref(db);
    const productRef = ref(db, "Product/");
    onValue(productRef, (snapshot) => {
      const data = snapshot.val();
      this.arrPro = Object.values(data || {});
      return console.log("this.arrProthis.arrPro", this.arrPro);
    });
  };




}

export default QLProduct;