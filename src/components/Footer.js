import React from 'react';

export default function Footer(){

    return(
        <div aria-label='footerDiv' id='footerDiv'>
            <div id='footer'>
                <p>froot © 2023</p>
                <p className='red dot'>•</p>
                <p>powered by Kat </p>
                <p className='yellow dot'>•</p>
                <p>est. 1991</p>
                <p className='blue dot'>•</p>
                <a href='https://github.com/kdevay'>Contact</a>
                <p className='purple dot'>•</p>
                <a href='https://www.youtube.com/watch?v=umFweP6BKoE'>Terms of Use</a>
                <p className='green dot'>•</p>
                <a href='https://www.instagram.com/kateatsgarbage/'>Privacy Policy</a>
            </div>
        </div>
    )
}