import React from 'react';
import background from '../froot/background.png';

export default function Page(props){
    const {head, subHead} = props;

    return(
        <div>
            <div className='topText'>
                <h1 id='well'>{head}</h1>
                <h4>{subHead}</h4>
            </div>
            <div id='background'>
                <img className='background' src={background} alt='colorful squiggly lines'></img>
            </div>
        </div>
    )
}