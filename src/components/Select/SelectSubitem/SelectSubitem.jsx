import { useId } from "react";
import "./style.css";

const SelectSubitem = ({ title, itemId }) => {
  const id = useId();
  return (
    <li className="subitem">
      <label htmlFor={`subitem-${id}`} className="subitem__label">
        <input type="checkbox" id={`subitem-${id}`}  />
        <span className="subitem__checkmark"></span>
        <span className="subitem__content">{title}</span>
      </label>
    </li>
  );
};

export default SelectSubitem;
