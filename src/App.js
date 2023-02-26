
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from "./components/Logo.js";
import Cart from "./components/Cart.js";
import Shop from "./components/Shop.js";
import Page from "./components/Page.js";
import Footer from "./components/Footer.js";
import watermelon from './froot/watermelon.jpg';
import banana from './froot/banana.png';
import papaya from './froot/papaya.png';
import apple from './froot/apple.png';
import mango from './froot/mango.png';
import kiwi from './froot/kiwi.png';
import cart from './froot/cart.png';

export default function App() {
  const text = { 
    home:{head: 'Welcome.', subHead: 'buy the fruit, eat the fruit, poop the fruit'}, 
    error:{head: 'Sorry.', subHead: 'this page is not available'},
    cart:{head: 'Empty.', subHead: 'nothing to see here'}
  }
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
            <Logo></Logo>
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
            <Route path="/" element={<Page head={text.home.head} subHead={text.home.subHead} />}/>
            <Route path="/shop" element={<Shop updateCartItems={updateCartItems} />} />
            <Route path="/cart" element={<Cart text={text.cart} cartItems={cartItems} updateCartItems={updateCartItems} />} />
            <Route path="*" element={<Page head={text.error.head} subHead={text.error.subHead}/>} />
          </Routes>
          <Footer></Footer>
    </Router>
  )
}