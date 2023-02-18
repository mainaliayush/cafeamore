import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';

import { motion } from "framer-motion";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptycart.png";
import CartItem from "./CartItem";


const CartContainer = () => {

  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  const globalStore = useSelector((state) => state.CartReducer)
  const cartShow = globalStore.cartShow
  const cartItems = globalStore.cartItems
  const user = globalStore.user
  console.log("Items from the cart container", cartItems)

  const dispatch = useDispatch();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;  
    }, 0);
    setTot(totalPrice);
  }, [tot, flag, cartItems]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-20 right-0 w-full md:w-375 h-320 bg-gray-300 drop-shadow-md rounded-lg flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          {/* <MdOutlineKeyboardBackspace className="text-textColor text-3xl" /> */}
        </motion.div>
        <p className="text-textColor text-lg font-semibold">YOUR CART</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-1 p-1 px-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          onClick={showCart}
        >
          {/* Clear Cart <RiRefreshFill /> */}
          <RxCross2 className="text-textColor text-xl" />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-gray-800 flex flex-col">
          {/* cart Items section */}
          <div className="w-full h-340 md:h-42 px-6 py-3 flex flex-col gap-1 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItem
                  key={item?.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-cartTotal  flex flex-col items-center justify-evenly px-8 py-2">
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ {tot.toFixed(2)}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Tax (NJ 6.625%)</p>
              <p className="text-gray-400 text-lg">$ {(tot*0.06625).toFixed(2)}</p>
            </div>

            <div className="w-full border-b border-gray-600 my-3"></div>

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                ${(tot + tot * 0.06625).toFixed(2)}
              </p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Check Out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold my-10">
            Add some FOODS to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;