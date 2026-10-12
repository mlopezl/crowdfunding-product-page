import closeIcon from '../../../public/images/icon-close-menu.svg';

function CloseIcon({isMenuOpened, setIsMenuOpened}) {
  return (
    <img
      onClick={() => setIsMenuOpened(false)}
      className={`
                ${isMenuOpened ? "block" : "hidden"}
                w-4 h-4 md:hidden`}
      src={closeIcon}
      alt="Close icon"
    />
  );
}

export default CloseIcon;
