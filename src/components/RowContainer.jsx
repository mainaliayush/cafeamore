import React, { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";

import { actionType } from "../context/reducer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';



const RowContainer = ({ flag, data, isSlidable }) => {
  const rowContainer = useRef();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("breakfasts");
  const globalStore = useSelector((state) => state.CartReducer)
  const cartShow = globalStore.cartShow
  const cartItems = globalStore.cartItems
  const user = globalStore.user
  
  const slideLeft = () => {
    rowContainer.current.scrollLeft -= 500;
  };

  const slideRight = () => {
    rowContainer.current.scrollLeft += 500;
  };

  const addtocart = (item) => {
    console.log("Called add to cart")
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: item,
    });
  };
  return (
    <div className="flex flex-row items-center justify-evenly relative md:ml-7">
      {isSlidable && <div className="flex flex-col items-center justify-evenly relative">
        <div className="w-full flex items-center justify-between">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100 ${}"
            onClick={slideLeft}
            size={40}
          />
        </div>
      </div>}
      <div
        ref={rowContainer}
        className={`w-full flex items-center gap-3  scroll-smooth  ${
          flag
            ? "overflow-x-scroll scrollbar-none"
            : "overflow-x-hidden flex-wrap "
        }`}
      >
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item?.id}
              className="w-full h-[175px] min-w-[full] md:w-350 md:min-w-[400px] mr-3  bg-gray-100 rounded-lg px-4  shadow-2xl  flex flex-col items-center justify-evenly relative"
            >
              <div className="w-full flex items-center justify-between mt-2">
                <motion.div
                  className="w-40 h-40"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={item?.img}
                    alt=""
                    className="w-full h-auto object-contain -ml-2 rounded-sm "
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:bg-red-700 -mt-24"
                  onClick={() => addtocart(item)}
                >
                  
                  <AiOutlineShoppingCart className="text-white" />
                </motion.div>
              </div>

              <div className="w-full flex flex-col items-end justify-end text-wrap -mt-24 mb-5">
                <p className="text-black-500 font-semibold text-lg md:text-md">
                  {item?.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item?.calories} Calories
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span>{" "}
                    {item?.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            {/* <img src={NotFound} className="h-340" /> */}
            <p className="text-xl text-headingColor font-semibold my-2">
              Items Not Available
            </p>
          </div>
        )}
      </div>
      {isSlidable && <div className="flex flex-col items-center justify-evenly relative">
        <div className="w-full flex items-center justify-between">
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>}
    </div>
  );
};

export default RowContainer;
