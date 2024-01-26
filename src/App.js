import React, { useState } from 'react'

import { Route, Routes } from 'react-router-dom';
import SideNavigation from './components/navigation/SideNavigation';
import TopNavgation from './components/navigation/TopNavigation';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';
import ProductContext from './context/ProductContext';
import Wishlist from './pages/Wishlist';
import Shop from './pages/Shop';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

// import addProductsToFirestore from './firebase';
import { datas } from './firebase';
import AuthProvider from './context/AuthContext';



function App() {
  // console.log(datas)
  const [openSideMenu, setOpenSideMenu] = useState(false); 
  const toggleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  }

  return (
    <ProductContext >
      <AuthProvider >

      
        <SideNavigation openSideMenu={openSideMenu} />
        <TopNavgation toggleSideMenu={toggleSideMenu} />
        <Routes>
        <Route path='/' element={ <Home /> } ></Route>

        <Route path='/shop' element={ <Shop /> } ></Route>

        <Route path='/wishlist' element={ <Wishlist /> } ></Route>

        <Route path='/cart' element={ <CartPage /> } ></Route>

        <Route path='/details/:id' element={ <ProductDetails /> } ></Route>
        
        <Route path='/profile' element={ <ProfilePage /> } ></Route>

        <Route path='/signup' element={ <SignUpPage /> } ></Route>

        <Route path='/login' element={ <LoginPage /> } ></Route>
        </Routes>

      </AuthProvider>
    </ProductContext>
  );
}

export default App;
