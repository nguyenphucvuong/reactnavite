import { ref, set, push, child, update, onValue } from 'firebase/database'

import { db } from '../../firebase.config'

class Discount {
  constructor(id, code, percentage) {
    this.id = id;
    this.code = code;
    this.percentage = percentage;
  }





}

export default Discount;
