function MobileMenu({ isMenuOpened }) {
  return (
    <nav
      className={`${isMenuOpened ? "block" : "hidden"} w-18/20 h-44 rounded-xl bg-white absolute top-20 sm:w-37/40 md:hidden`}
    >
      <ul className="w-full h-full flex flex-col justify-between text-md font-semibold">
        <li className="border-b-1 border-gray-200 p-4 h-full flex items-center">
          <a href="#">About</a>
        </li>
        <li className="border-b-1 border-gray-200 p-4 h-full flex items-center">
          <a href="#">Discover</a>
        </li>
        <li className="h-full p-4 flex items-center">
          <a href="#">Get Started</a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
