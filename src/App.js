

import { Route, Routes } from 'react-router-dom';
import SideNavigation from './components/navigation/SideNavigation';
import TopNavgation from './components/navigation/TopNavigation';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <>
      <SideNavigation />
      <TopNavgation/>
      <Routes>
        <Route path='/' element={ <Home /> } ></Route>
        <Route path='/cart' element={ <CartPage /> } ></Route>
        <Route path='/details' element={ <ProductDetails /> } ></Route>
      </Routes>
    </>
  );
}

export default App;
