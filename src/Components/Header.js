import "../../src/App.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <header className="flex justify-between px-5 py-2 bg-white text-warning fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Afsheen Shaik
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="https://emerald-dacia-57.tiiny.site" target="_blank" without rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>   
    </header>
  );
};

export default Header;
