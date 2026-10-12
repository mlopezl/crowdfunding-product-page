import desktopBackground from '../../../public/images/image-hero-desktop.jpg';

function DesktopBackground(){
    return(
        <img className='w-full absolute hidden z-0 sm:block brightness-80' src={desktopBackground} alt="" />
    )
}

export default DesktopBackground;