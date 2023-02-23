
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from "./components/Cart.js"
import Shop from "./components/Shop.js"
import Home from "./components/Home.js"
import Error from './components/Error.js'
import watermelon from './froot/watermelon.jpg';
import banana from './froot/banana.png';
import papaya from './froot/papaya.png';
import apple from './froot/apple.png';
import mango from './froot/mango.png';
import kiwi from './froot/kiwi.png';
import cart from './froot/cart.png';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {name: 'WATERMELON', cost: 10, src: watermelon, alt: 'A whole watermelon speckled with drops of water', count: 0},
    {name: 'BANANA', cost: 4, src: banana, alt: 'A bunch of bananas', count: 0},
    {name: 'PAPAYA', cost: 5, src: papaya, alt: 'A sliced papaya', count: 0},
    {name: 'APPLE', cost: 2, src: apple, alt: 'An apple', count: 0},
    {name: 'MANGO', cost: 3, src: mango, alt: 'A whole mango', count: 0},
    {name: 'KIWI', cost: 1, src: kiwi, alt: 'A sliced kiwi', count: 0}
]);

  const updateCartItems = (index, count) => {
    if (index === 'all'){
      setCartItems(count);
      return;
    }
    let clone = [...cartItems];
    clone[index].count = count;
    setCartItems(clone);
  };
  
  const [cartCount, setCartCount] = useState(0);

  useEffect(() =>{
    let num = 0;
    cartItems.forEach( item => {
      num += item.count;
    });
    setCartCount(num);
  }, [cartItems]);

  return (
    <Router>
      <div className={cartCount > 0 ? 'cartCount' : 'hiddenCount'}>{cartCount}</div>
      <div className='nav'>
            <span id='logo'>
              <h1 className='heading red'>f</h1>
              <h1 className='heading yellow'>r</h1>
              <h1 className='heading blue'>o</h1>
              <h1 className='heading purple'>o</h1>
              <h1 className='heading green'>t</h1>
            </span>
            <div className='leftNav'>
                <Link to={'/shop'} className='navLink purpHov'>shop</Link>
                <Link to={'/'} className='navLink greenHov'>home</Link>
                <div className='cartDiv'>
                    <Link to={'/cart'}>
                        <img className='cart' src={cart} alt='Shopping cart icon'></img>
                    </Link>
                </div>
            </div>
        </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop updateCartItems={updateCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItems={updateCartItems} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )

}














// 1. homepage -  add a few images or random info, nothing fancy. 
// 2. shop page - with  product tiles
// 3. shopping cart - products in cart, subtotal, checkout button

// shopping cart route
//  - sticky bar displaying the number of items currently in the cart. 
//  - checkout button next to bar

// tiles 
//  - image of product 
//  - increment/decrement buttons to select amount 
//  - title for each product
//  - “Add To Cart” button - Once a product is added, the cart (#/$) amount should adjust.