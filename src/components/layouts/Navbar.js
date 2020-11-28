import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-box">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
            <span className="logo__text">JivanDaan</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
