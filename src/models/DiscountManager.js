import Cart from "./Cart";
import { ref, set, push, child, update, onValue } from 'firebase/database'

import { db } from '../../firebase.config'

class DiscountManager {
    constructor() {
        this.discounts = [];
    }

    getAllDiscount = () => {
        const discountRef = ref(db, "Discount/");
        onValue(discountRef, (snapshot) => {
            const data = snapshot.val();
            this.discounts = Object.values(data || {});
            // console.log(this.discounts)
            return this.discounts;
        });
    };


} export default DiscountManager;