import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navHighlight, navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray transition-all hover:text-coral-red hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
          {navHighlight.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex justify-center items-center px-6 py-3 border font-montserrat relative bottom-1 text-lg leading-none bg-coral-red text-white border-coral-red transition-all hover:bg-white hover:text-coral-red rounded-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
