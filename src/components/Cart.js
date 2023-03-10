import React from 'react';
import uniqid from 'uniqid';
import Page from "./Page.js";

export default function Cart(props){
    const {updateCartItems, resetFruits, cartItems, text} = props;
    const isEmpty = checkIfCartIsEmpty(cartItems);

    const clearCart = () => {
        console.log('clearing cart');
        let clone = [...cartItems];
        clone.forEach(item => {
            item.count = 0;
        })
        updateCartItems('all', clone);
        resetFruits();
    }

    const totalCost = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.cost * item.count;
        })
        return total;
    }

    return isEmpty ? 
        <Page head={text.head} subHead={text.subHead}/>
        :
        (
            <div className='centered'>
                <table id='cart'>
                    <thead>
                        <tr>
                            <th className='wideCol'>product</th>
                            <th className='costCol'>$</th>
                            <th className='xCol'></th>
                            <th className='countCol'>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((item) => {
                                return item.count === 0 ? 
                                null :
                                (
                                    <tr key={uniqid()}>
                                        {/* Tile {addToCart, updateCount, fruit, index, page} = props; */}
                                        <td className='wideCol'>
                                            <div className='cartItem'>
                                                <div className="smallTile"> 
                                                    <img className='smallTileImages' src={item.src} alt={item.alt}></img>
                                                </div>
                                                <p>{item.name}</p>
                                            </div>
                                        </td>
                                        <td className='costCol'>{item.cost}</td>
                                        <td className='xCol'>x</td>
                                        <td className='countCol'>{item.count}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className='wideCol'>TOTAL:</th>
                            <td className='costCol'>{'$' + totalCost() + '.00'}</td>
                            <td className='xCol'></td>
                            <th className='countCol'></th>
                        </tr>
                    </tfoot>
                </table>
                <button id='checkout' onClick={clearCart}>Checkout</button>
            </div>
        );
}

function checkIfCartIsEmpty(cart){
    let flag = 0;
    cart.forEach(item =>{
        if (item.count !== 0){
            flag++;
        }
    })
    return flag > 0 ? false : true;
}