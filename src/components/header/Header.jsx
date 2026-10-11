import mobileBackground from '../../../public/images/image-hero-mobile.jpg';
import desktopBackground from '../../../public/images/image-hero-desktop.jpg';
import logo from '../../../public/images/logo.svg';
import hamburgerIcon from '../../../public/images/icon-hamburger.svg';
import closeIcon from '../../../public/images/icon-close-menu.svg';
import { useState } from  'react';

function Header(){
    const [isMenuOpened, setIsMenuOpeneded] =  useState(false);
    return(
        <header className='relative w-full flex flex-col items-center'>
            <img
             className='w-full absolute z-0 sm:hidden' src={mobileBackground} alt="" />
            <img className='w-full absolute hidden z-0 sm:block brightness-80' src={desktopBackground} alt="" />
            <div className='w-full max-w-5xl p-5 absolute z-1 flex justify-between items-center sm:p-7 md:p-8'>
                <img src={logo} alt="Crowdfund logo" />
                <img
                onClick={() => setIsMenuOpeneded(true)}
                className={`
                ${isMenuOpened ? "hidden" : "block"}
                w-4 h-4 md:hidden`} src={hamburgerIcon} alt="Menu icon" />
                <img
                onClick={() => setIsMenuOpeneded(false)}
                className={`
                ${isMenuOpened ? "block" : "hidden"}
                w-4 h-4 md:hidden`} src={closeIcon} alt="Close icon" />
                <nav className='hidden h-full md:block flex items-center'>
                    <ul className='flex gap-5 text-white text-sm font-semibold'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Get Started</a></li>
                    </ul>
                </nav>
                <nav className={`${isMenuOpened ? "block" :  "hidden"} w-18/20 h-44 rounded-xl bg-white absolute top-20 sm:w-37/40 md:hidden`}>
                    <ul className='w-full h-full flex flex-col justify-between text-md font-semibold'>
                        <li className='border-b-1 border-gray-200 p-4 h-full flex items-center'><a href="#">About</a></li>
                        <li className='border-b-1 border-gray-200 p-4 h-full flex items-center'><a href="#">Discover</a></li>
                        <li className='h-full p-4 flex items-center'><a href="#">Get Started</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;