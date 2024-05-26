import React, { createContext, useState, useEffect } from 'react';
import { getAllCartData, getAllDiscountData } from '../apis/firebaseComponent'; // Các hàm API để lấy dữ liệu từ Firebase
import { CartManager, DiscountManager, BillManager } from '../models';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const cartData = new CartManager;
    const discountData = new DiscountManager;
    const billData = new BillManager;

    useEffect(() => {
        const interval = setInterval(() => {
            cartData.getAllData("admin1@gmail.com");
            discountData.getAllDiscount();
            billData.getAllBillData("admin1@gmail.com");
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AppContext.Provider value={{ cartData, discountData, billData }}>
            {children}
        </AppContext.Provider>
    );
};
