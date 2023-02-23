import React from 'react';
import uniqid from 'uniqid';

export default function Cart(props){
    const {updateCartItems, cartItems} = props;

    const clearCart = () => {
        console.log('clearing cart');
        let clone = [...cartItems];
        clone.forEach(item => {
            item.count = 0;
        })
        updateCartItems('all', clone);
    }

    const totalCost = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.cost;
        })
        return total;
    }

    return(
        <div className='cartContainer'>
            <table id='cart'>
                <thead>
                    <tr>
                        <th className='wideCol'>product</th>
                        <th className='thinCol'>cost per unit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map((item) => {
                            return(
                                <tr key={uniqid()}>
                                    {/* Tile {addToCart, updateCount, fruit, index, page} = props; */}
                                    <td className='wideCol'>
                                        <div className="smallTile"> 
                                            <img className='smallTileImages' src={item.src} alt={item.alt}></img>
                                            <p>{item.name}</p>
                                        </div>
                                    </td>
                                    <td className='thinCol'>{item.cost}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th className='wideCol'>total:</th>
                        <th className='thinCol'>{totalCost()}</th>
                    </tr>
                </tfoot>
            </table>
            <button id='checkout' onClick={clearCart}>Checkout</button>
        </div>
    )
}