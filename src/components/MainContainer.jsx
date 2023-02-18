import React, { useEffect, useRef, useState } from "react";

import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";


import { useDispatch, useSelector } from 'react-redux';


const MainContainer = () => {
  const globalStore = useSelector((state) => state.CartReducer)
  const cartShow = globalStore.cartShow
  const cartItems = globalStore.cartItems
  const user = globalStore.user
  
  // useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      {/* <section className="w-full">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative  transition-all ease-in-out duration-100 ml-10 mt-5">
            CHEF'S &nbsp;SPECIALS
          </p>

        </div>
        <RowContainer
          isSlidable={true}
          flag={true}
          // data={data?.filter((n) => n.category === "fruits")}
        />
      </section> */}

      {/* <MenuContainer /> */}

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;