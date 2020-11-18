import Illus from '../../assets/illus.svg';

const Header = () => {
  return (
    <header className="header container">
      <div className="header__content">
        <span className="text--bold green">Save&nbsp;</span>&nbsp;
        <span className="text--bold">Life&nbsp;</span>&nbsp;
        <img
          src={Illus}
          alt="illustration"
          className="header__img"
          style={{ height: '20rem' }}
        />
        &nbsp; &nbsp;
        <span className="text--bold">Donate&nbsp;</span>&nbsp;
        <span className="text--bold red">Blood</span>
      </div>
      <div className="header__buttons">
        <button className="btn btn--red">donor</button>
        <button className="btn btn--green">reciepent</button>
      </div>
    </header>
  );
};

export default Header;
