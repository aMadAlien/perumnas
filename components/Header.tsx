import Link from "next/link";
import LogoIcon from "./icons/LogoIcon";

export default function Header() {
  return (
    <header className="header">
      <button
        type="button"
        className="menu-btn"
      >
        <span></span>
        Menu
      </button>

      <Link href='/'><LogoIcon /></Link>

      <nav>
        <ul className="nav__items">
          <li className="nav__item">
            <Link href='/'>Contact Us</Link>
          </li>
          <li className="nav__item">
            <Link href='/'>About Us</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}
