import mobileBackground from '../../../public/images/image-hero-mobile.jpg';
import desktopBackground from '../../../public/images/image-hero-desktop.jpg';
import logo from '../../../public/images/logo.svg';
import hamburgerIcon from '../../../public/images/icon-hamburger.svg';

function Header(){
    return(
        <header className='w-full flex flex-col items-center'>
            <img className='w-full absolute z-0 md:hidden' src={mobileBackground} alt="" />
            <img className='w-full absolute hidden z-0 md:block brightness-80' src={desktopBackground} alt="" />
            <div className='w-full max-w-5xl p-5 absolute z-1 flex justify-between items-center sm:p-7 md:p-8'>
                <img src={logo} alt="Crowdfund logo" />
                <img className='w-4 h-4 md:hidden' src={hamburgerIcon} alt="" />
                <nav className='hidden md:block'>
                    <ul className='flex gap-5 text-white text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Get Started</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;