import hamburgerIcon from '../../../public/images/icon-hamburger.svg';

function HamburgerIcon({isMenuOpened, setIsMenuOpened}){
    return(
        <img
                onClick={() => setIsMenuOpened(true)}
                className={`
                ${isMenuOpened ? "hidden" : "block"}
                w-4 h-4 md:hidden`} src={hamburgerIcon} alt="Menu icon" />
    )
}

export default HamburgerIcon;