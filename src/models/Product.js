// Product.js

class Product {
    constructor(id, tensp, mau, gia, soLuong, size, img) {
        this.id = id;
        this.tensp = tensp;
        this.mau = mau;
        this.gia = gia;
        this.soLuong = soLuong;
        this.size = size;
        this.img = img;
    }
    getId() {
        return this.id;
    }

    setId(value) {
        this.id = value;
    }

    getTensp() {
        return this.tensp;
    }

    setTensp(value) {
        this.tensp = value;
    }

    getMau() {
        return this.mau;
    }

    setMau(value) {
        this.mau = value;
    }

    getGia() {
        return this.gia;
    }

    setGia(value) {
        this.gia = value;
    }

    getSoLuong() {
        return this.soLuong;
    }

    setSoLuong(value) {
        this.soLuong = value;
    }

    getSize() {
        return this.size;
    }

    setSize(value) {
        this.size = value;
    }

    getImg() {
        return this.img;
    }

    setImg(value) {
        this.img = value;
    }

    // Phương thức để giảm số lượng sản phẩm
    decreaseSoLuong() {
        if (this.soLuong > 1) {
            this.soLuong--;
        }
    }

    // Phương thức để tăng số lượng sản phẩm
    increaseSoLuong() {
        this.soLuong++;
    }
}

export default Product;
