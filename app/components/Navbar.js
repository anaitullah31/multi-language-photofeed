import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="py-2 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
