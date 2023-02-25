import React from 'react';
import background from '../froot/background.png';

export default function Home(){

    return(
        <div>
            <div className='topText'>
                <h1 id='well'>Welcome.</h1>
                <h4>buy the fruit, eat the fruit, poop the fruit</h4>
            </div>
            <div id='background'>
                <img className='background' src={background} alt='colorful squiggly lines'></img>
            </div>
        </div>
    )
}