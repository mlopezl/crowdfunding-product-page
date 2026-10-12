function DesktopMenu() {
  return (
    <nav className="hidden h-full md:block flex items-center">
      <ul className="flex gap-5 text-white text-sm font-semibold">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Get Started</a>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopMenu;
