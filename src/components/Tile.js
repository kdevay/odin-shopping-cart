
import React from 'react';

export default function Tile(props) {
    const {increment, fruit, index} = props; //addToCart

    return (
        <div className="tile"> 
            <img className='tileImages' src={fruit.src} alt={fruit.alt}></img>
            <p>{fruit.name}</p>
            <span>
                <button data={index} id='p' onClick={increment}>+</button>
                <a>{fruit.count}</a>
                <button data={index} id='m' onClick={increment}>-</button>
            </span>
            <button>Add to cart</button>
        </div>
    );
}