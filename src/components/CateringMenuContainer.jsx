import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { cateringCategory } from "../utils/data";
import { motion } from "framer-motion";

import RowContainer from "./RowContainer";
import CartContainer from "./CartContainer";

import { useDispatch, useSelector } from 'react-redux';

import { GiKnifeFork } from "react-icons/gi";

import { beverages, desserts, breakfasts, appetizers, pastas, salads, seafoods, beefporks } from "../utils/data";
// import { breakfast, smoothie, salad, sides, dailyspecials, salads, seafoods, beefporks } from "../utils/data";


const MenuContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("breakfasts");
  const globalStore = useSelector((state) => state.CartReducer)
  const cartShow = globalStore.cartShow
  const cartItems = globalStore.cartItems
  const user = globalStore.user


  const data = []
  beverages.map((bev) => {data.push(bev) })
  desserts.map((swe) => {data.push(swe)})
  breakfasts.map((swe) => {data.push(swe)})
  appetizers.map((swe) => {data.push(swe)})
  pastas.map((swe) => {data.push(swe)})
  salads.map((swe) => {data.push(swe)})
  seafoods.map((swe) => {data.push(swe)})
  beefporks.map((swe) => {data.push(swe)})


  // const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-4xl flex flex-row items-center justify-center  font-bold  text-black pb-7">
          <p> <GiKnifeFork style={{color:"grey"}} /> </p> <p>&nbsp;&nbsp;&nbsp;CATERING MENU&nbsp;&nbsp;&nbsp;</p> <p> <GiKnifeFork style={{color:"grey"}}/> </p> 
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {cateringCategory &&
            cateringCategory.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  selectedCategory === category.urlParamName ? "bg-red-700" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-700 `}
                onClick={() => setSelectedCategory(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    selectedCategory === category.urlParamName
                      ? "bg-white"
                      : "bg-red-700"
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
            // isSlidable={true}
          />
        </div>
        {cartShow && <CartContainer />}
      </div>
    </section>
  );
};

export default MenuContainer;