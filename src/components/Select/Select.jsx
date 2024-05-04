import { useState } from "react";
import arrow from "../../assets/arrow.svg";

import "./style.css";

const Select = ({ children, icon, title }) => {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <div className={`select ${isSelect ? "select_active" : ""}`}>
      <div className="select__top" onClick={() => setIsSelect((prev) => !prev)}>
        <span className="select__left">
          <span className="select__icon">
            <img src={icon} alt="" />
          </span>
          <span className="select__title">{title}</span>
        </span>
        <span className="select__arrow">
          <img src={arrow} alt="" />
        </span>
      </div>
      <div className="select__body">
        <div className="select__content">{children}</div>
      </div>
    </div>
  );
};

export default Select;
