import mobileBackground from '../../../public/images/image-hero-mobile.jpg';

function MobileBackground(){
    return(
        <img
             className='w-full absolute z-0 sm:hidden' src={mobileBackground} alt="" />
    )
}

export default MobileBackground;