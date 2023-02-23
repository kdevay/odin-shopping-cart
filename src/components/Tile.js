
import React from 'react';

export default function Tile(props) {
    const {addToCart, updateCount, fruit, index} = props;
    
    return (
            <div className="tile"> 
                <img className='tileImages' src={fruit.src} alt={fruit.alt}></img>
                <div className='namePrice'>
                    <p>{fruit.name}</p>
                    <p className='grey'>{'$' + fruit.cost}</p>
                </div>
                <span>
                    <button className='incButtons' data={index} id='m' onClick={updateCount}>-</button>
                    <a>{fruit.count}</a>
                    <button className='incButtons' data={index} id='p' onClick={updateCount}>+</button>
                </span>
                { fruit.count > 0 ? <button className='cartButton' data={index} onClick={addToCart}>Add to cart</button> : null}
            </div>
    );
}