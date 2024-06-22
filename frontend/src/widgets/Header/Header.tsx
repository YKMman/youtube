import { Link } from "react-router-dom";

import { Logo } from "../../entities";
import { Search } from "../../features";
import "./HeaderStyles.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Search />

      <Link to="#" className="header__avatar"></Link>
    </header>
  );
};

export default Header;
