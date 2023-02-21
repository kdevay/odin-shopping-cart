
import React from 'react';

export default function Tile(props) {
    const {increment, fruit, index} = props; //addToCart

    return (
        <div className="tile"> 
            <img className='tileImages' src={fruit.src} alt={fruit.alt}></img>
            <p>{fruit.name}</p>
            <span>
                <button className='incButtons' data={index} id='m' onClick={increment}>-</button>
                <a>{fruit.count}</a>
                <button className='incButtons' data={index} id='p' onClick={increment}>+</button>
            </span>
            { fruit.count > 0 ? <button className='cartButton'>Add to cart</button> : null}
        </div>
    );
}