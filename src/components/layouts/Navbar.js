import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar ">
      <div className="container">
        <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
          <span className="logo__text">JivanDaan</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
