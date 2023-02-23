
import React, { useState } from 'react';
import Tile from './Tile.js';
import watermelon from '../froot/watermelon.jpg';
import banana from '../froot/banana.png';
import papaya from '../froot/papaya.png';
import apple from '../froot/apple.png';
import mango from '../froot/mango.png';
import kiwi from '../froot/kiwi.png';
import uniqid from 'uniqid';


export default function Shop(props) {
    const [fruits, setFruits] = useState(populateFruit());
    const {updateCartCount, updateCartItems} = props;

    const updateCount = (e) => {
        let clone = [...fruits];
        let i = e.target.getAttribute('data');
        if (e.target.id === 'm'){
        if (clone[i].count - 1 < 0) return;
        clone[i].count --;
        } else {
        clone[i].count++;
        }
        setFruits(clone);
    }

    const addToCart = (e) => {
        let clone = [...fruits];
        let i = e.target.getAttribute('data');
        updateCartItems(i, clone[i].count);
    }

    return (
        <div id='grid'>
            {
            fruits.map((fruit, index) => {
                return (
                <Tile 
                    page='shop'
                    index={index}
                    fruit={fruit}
                    key={fruit.key}
                    addToCart={addToCart}
                    updateCount={updateCount}>
                </Tile>
                );
            })
            }
        </div>
    );
}

function populateFruit() {
    return [
        {name: 'WATERMELON', cost: 10, src: watermelon, alt: 'A whole watermelon speckled with drops of water', count: 0, key: uniqid()},
        {name: 'BANANA', cost: 4, src: banana, alt: 'A bunch of bananas', count: 0, key: uniqid()},
        {name: 'PAPAYA', cost: 5, src: papaya, alt: 'A sliced papaya', count: 0, key: uniqid()},
        {name: 'APPLE', cost: 2, src: apple, alt: 'An apple', count: 0, key: uniqid()},
        {name: 'MANGO', cost: 3, src: mango, alt: 'A whole mango', count: 0, key: uniqid()},
        {name: 'KIWI', cost: 1, src: kiwi, alt: 'A sliced kiwi', count: 0, key: uniqid()}
    ]
}