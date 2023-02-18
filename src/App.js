import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer, CreateContainer } from './components';

// import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import { AboutUs } from './components';
import { Catering } from './components';
import { Menu } from './components'
import { Gallery } from './components';
import { useDispatch, useSelector } from 'react-redux';
// import gallery from './components/gallery';

const App = () => {
  // const [{ foodItems }, dispatch] = useStateValue();
  const dispatch = useDispatch();
  const foodItems = []
  // const cartItems = []
  // const user = []
  // ----------------------------------------------

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <div className='w-screen h-auto flex flex-col bg-primary'>
          <Header />
          <main className='mt-14 md:mt:-20 px-4 md:px-16 py-4 w-full'>
            <Routes>
              <Route>
                <Route path="/*" element={<MainContainer/>} />
                <Route path="/createItem" element={<CreateContainer/>} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/gallery" element={<Gallery/>} />

              </Route>
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
