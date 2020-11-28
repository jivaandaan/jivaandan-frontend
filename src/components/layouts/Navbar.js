import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1500">
      <div className="container">
        <div
          className="logo-box"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1500"
        >
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
