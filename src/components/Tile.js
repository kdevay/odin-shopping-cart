
import React from 'react';

export default function Tile(props) {
    const {increment, addToCart, fruit, index} = props;
    const {source, alt, name, count} = fruit;


    return (
        <div className="tile"> 
            <img src={source} alt={alt}></img>
            <p>{name}</p>
            <span>
                <button data={index} id='p' onClick={increment}>+</button>
                <a>{count}</a>
                <button data={index} id='m' onClick={increment}>-</button>
            </span>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
}