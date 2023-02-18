import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
// import { useStateValue } from "../context/StateProvider";
import { useDispatch, useSelector } from 'react-redux';
import { actionType } from "../context/reducer";
import { fetchCart } from "../utils/fetchLocalStorageData";
let items = [];

const CartItem = ({ item, setFlag, flag }) => {
  const globalStore = useSelector((state) => state.CartReducer)
  const cartShow = globalStore.cartShow
  const cartItems = globalStore.cartItems
  const user = globalStore.user


  const dispatch = useDispatch();

  const cartDispatch = (item) => {
    dispatch({
      type: actionType.CHANGE_CART_ITEMS,
      cartItems: item,
    });
  };

  const updateQty = (action, item) => {
    console.log("Item ", item)
    if (action == "add" && item) {
      item.qty += 1
      cartDispatch(item);
    } else if (item) {
      item.qty -= 1
      cartDispatch(item)
    }
  };

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL || item?.img}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {parseFloat(item?.price) * item.qty}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item)}
        >
          <BiMinus className="text-gray-50 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {item.qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item)}
        >
          <BiPlus className="text-gray-50 " />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;