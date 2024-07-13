import React from 'react';
import { Image } from 'next/image';

const Landing = ({ mode }) => {
    return (
        <div className='Hack Cambridge GIF'>
            {mode === 'light' && (
                <Image src='/light-mode.gif' alt="Light Mode GIF" />
            )}
            {mode === 'dark' && (
                <Image src='/dark-mode.gif' alt="Dark Mode GIF" />
            )}
        </div>
    );
};

export default Landing;