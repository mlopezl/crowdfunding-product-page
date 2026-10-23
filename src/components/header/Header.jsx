import { useState } from  'react';
import MobileBackground from './MobileBackground';
import DesktopBackground from './DesktopBackground';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import CloseIcon from './CloseIcon';

function Header(){
    const [isMenuOpened, setIsMenuOpened] =  useState(false);
    return(
        <header className='w-full h-65 flex flex-col items-center z-1'>
            <MobileBackground/>
            <DesktopBackground/>
            {isMenuOpened && (
  <div
    className="fixed inset-0 bg-black/50 z-[10] md:hidden"
    onClick={() => setIsMenuOpened(false)}
  />
)}
            <div className='w-full max-w-5xl p-5 absolute z-[20] flex justify-between items-center sm:p-7 md:p-8'>
                <Logo/>
                <HamburgerIcon isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}/>
                <CloseIcon isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}/>
                <DesktopMenu/>
                <MobileMenu isMenuOpened={isMenuOpened} />
            </div>
        </header>
    )
}

export default Header;