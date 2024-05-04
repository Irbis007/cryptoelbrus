
import random from '../../assets/shuffle.svg'
import turn from '../../assets/layers.svg'

import "./style.css";

const Settings = ({ lang, setLang, sort, setSort }) => {
  return (
    <div>
      <div className="language">
        <div className="language__top">{lang ? "Язык" : "Language"}</div>
        <div className="language__body">
          <label htmlFor="lang__ru" className="language__select" onClick={() => setLang(true)}>
            <input type="radio" id="lang__ru" name="lang" />
            <span className="checkmark"></span>
            <span className={`radio__content ${!lang ? "" : "radio__content_active"}`}>
              Русский
            </span>
          </label>
          <label htmlFor="lang__eng" className="language__select" onClick={() => setLang(false)}>
            <input type="radio" id="lang__eng" name="lang" />
            <span className="checkmark"></span>
            <span className={`radio__content ${lang ? "" : "radio__content_active"}`}>English</span>
          </label>
        </div>
      </div>
      <div className="sort">
        <div className="sort__top">
          {lang ? "Порядок подачи тестов" : "The procedure for submitting tests"}
        </div>
        <div className="sort__body">
          <div
            className={`sort__select ${!sort ? "sort__select_active" : ""}`}
            onClick={() => setSort(false)}
          >
            <span className="sort__icon">
              <img src={random} alt="Rundom" />
            </span>
            <span className="sort__content">{lang ? "Случайно" : "Random"}</span>
          </div>
          <div
            className={`sort__select ${sort ? "sort__select_active" : ""}`}
            onClick={() => setSort(true)}
          >
            <span className="sort__icon">
              <img src={turn} alt="Turn" />
            </span>
            <span className="sort__content">{lang ? "По очереди" : "In turn"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
