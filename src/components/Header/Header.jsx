import logo from "../../assets/logo.svg";
import settings from "../../assets/settings.svg";

import "./style.css";

const Header = ({ lang, isSettings, setPage }) => {
  return (
    <div className="header">
      <div className="container">
        <div className={`deckor deckor-1 ${isSettings ? "deckor__active" : ""}`}></div>
        <div className={`deckor deckor-2 ${isSettings ? "deckor__active" : ""}`}></div>
        <div className="header__top">
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
          <div className="settings">
            <button className="settings__icon" onClick={() => setPage((prev) => !prev)}>
              {!isSettings ? <img src={settings} alt="settings" /> : <div className="close"></div>}
            </button>
          </div>
        </div>
        <div className="header__body">
          <h1>{lang ? "Привет!" : "Hello!"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
