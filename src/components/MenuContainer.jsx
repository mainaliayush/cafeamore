import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { categories } from "../utils/data";
import { motion } from "framer-motion";

import RowContainer from "./RowContainer";
import CartContainer from "./CartContainer";

import { pastas, wraps, beverages } from "../utils/data";
import { useDispatch, useSelector } from 'react-redux';

// import { beverages, desserts, breakfasts, appetizers, pastas, salads, seafoods, beefporks } from "../utils/data";
import { breakfast, smoothie, salad, sides, dailyspecials, deli, grill, hotbox, coldbox} from "../utils/data";

const MenuContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("breakfast");
  const globalStore = useSelector((state) => state.CartReducer)
  const cartShow = globalStore.cartShow
  const cartItems = globalStore.cartItems
  const user = globalStore.user

  const data = [];
  breakfast.map((bev) => {data.push(bev) })
  smoothie.map((swe) => {data.push(swe)})
  salad.map((swe) => {data.push(swe)})
  sides.map((swe) => {data.push(swe)})
  dailyspecials.map((swe) => {data.push(swe)})
  deli.map((swe) => {data.push(swe)})
  grill.map((swe) => {data.push(swe)})
  hotbox.map((swe) => {data.push(swe)})
  coldbox.map((swe) => {data.push(swe)})

  return (
    <section className="w-full my-6 " id="menu">
      <div className="w-full items-center justify-center">
        <p className="text-4xl flex flex-row items-center justify-center  font-bold  text-black pb-7">
          <p>
            {" "}
            <GiKnifeFork style={{ color: "grey" }} />{" "}
          </p>{" "}
          <p>&nbsp;&nbsp;&nbsp;LUNCHBOX MENU&nbsp;&nbsp;&nbsp;</p>{" "}
          <p>
            {" "}
            <GiKnifeFork style={{ color: "grey" }} />{" "}
          </p>
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-2 sm:gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  selectedCategory === category.urlParamName
                    ? "bg-cartNumBg"
                    : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg `}
                onClick={() => setSelectedCategory(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    selectedCategory === category.urlParamName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      selectedCategory === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    selectedCategory === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full">
          <RowContainer
            flag={false}
            data={data.filter((d) => d.category === selectedCategory)}
            isSlidable={false}
          />
        </div>
        {cartShow && <CartContainer />}
      </div>
    </section>
  );
};

export default MenuContainer;
