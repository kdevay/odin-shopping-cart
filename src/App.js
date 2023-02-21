
import React, { useState, useEffect } from 'react';
import Tile from './components/Tile.js';
import watermelon from './froot/watermelon.jpg';
import banana from './froot/banana.png';
import papaya from './froot/papaya.png';
import apple from './froot/apple.png';
import mango from './froot/mango.png';
import kiwi from './froot/kiwi.png';
import cart from './froot/cart.png';
import uniqid from 'uniqid';


function App() {
  const [fruits, setFruits] = useState(populateFruit());
  const [cartCount, setCartCount] = useState(0);

  const incrementFruit = (e) => {
    let clone = [...fruits];
    let i = e.target.getAttribute('data');
    if (e.target.id === 'm'){
      if (clone[i].count - 1 < 0) return;
      clone[i].count --;
      setCartCount(cartCount - 1);
    } else {
      clone[i].count++;
      setCartCount(cartCount + 1);
    }
    setFruits(clone);
  }

  return (
    <div className="App"> 
      {cartCount > 0 ? <div className='cartCount'>{cartCount}</div> : null}
      <div className='nav'>
        <span>
          <a className='heading red'>f</a>
          <a className='heading yellow'>r</a>
          <a className='heading blue'>o</a>
          <a className='heading purple'>o</a>
          <a className='heading green'>t</a>
        </span>
        <div className='cartDiv'>
          <img className='cart' src={cart}></img>
        </div>
      </div>
      <div id='grid'>
        {
          fruits.map((fruit, index) => {
            return (
              <Tile 
                index={index}
                fruit={fruit}
                key={fruit.key}
                increment={incrementFruit}>
              </Tile>
            );
          })
        }
      </div>
    </div>
  );
}

function populateFruit() {
  return [
    {name: 'WATERMELON', src: watermelon, alt: 'A whole watermelon speckled with drops of water', count: 0, key: uniqid()},
    {name: 'BANANA', src: banana, alt: 'A bunch of bananas', count: 0, key: uniqid()},
    {name: 'PAPAYA', src: papaya, alt: 'A sliced papaya', count: 0, key: uniqid()},
    {name: 'APPLE', src: apple, alt: 'An apple', count: 0, key: uniqid()},
    {name: 'MANGO', src: mango, alt: 'A whole mango', count: 0, key: uniqid()},
    {name: 'KIWI', src: kiwi, alt: 'A sliced kiwi', count: 0, key: uniqid()}
  ]
}


export default App;











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