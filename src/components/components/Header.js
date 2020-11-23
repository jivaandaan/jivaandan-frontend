import Illus from '../../assets/illus.svg';

const Header = () => {
  return (
    <header className="header container">
      <img
        src={Illus}
        alt="illustration"
        className="header__img--sm"
        style={{ height: '20rem' }}
      />
      <div className="header__content">
        <span
          className="text--bold green"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Save&nbsp;
        </span>
        &nbsp;
        <span
          className="text--bold"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Life&nbsp;
        </span>
        &nbsp;
        <img
          src={Illus}
          alt="illustration"
          className="header__img"
          style={{ height: '25rem' }}
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-delay="1000"
        />
        &nbsp; &nbsp;
        <span
          className="text--bold"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Donate&nbsp;
        </span>
        &nbsp;
        <span
          className="text--bold red"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Blood
        </span>
      </div>
      <div className="header__buttons">
        <button
          className="btn btn--red"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-bottom"
        >
          donor
        </button>
        <button
          className="btn btn--green"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-bottom"
        >
          recipient
        </button>
      </div>
    </header>
  );
};

export default Header;
