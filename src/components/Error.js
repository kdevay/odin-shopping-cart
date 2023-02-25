import React from 'react';
import background from '../froot/background.png';

export default function Error(){

    return(
        <div>
            <div className='topText'>
                <h1 id='well'>Sorry.</h1>
                <h4>this page is not available</h4>
            </div>
            <div id='background'>
                <img className='background' src={background} alt='colorful squiggly lines'></img>
            </div>
        </div>
    )
}