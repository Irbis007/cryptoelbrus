

import { useState } from 'react'
import plus from '../../../assets/plus.svg'

import './style.css'
import SelectSubitem from '../SelectSubitem/SelectSubitem'

const SelectItem = ({children, title}) => {
  const [isSelect, setIsSelect] = useState(false)


  return (
    <li className={`select__item ${isSelect ? 'select__item_active' : ''}`}>
      <div className="item__top" onClick={() => setIsSelect(prev => !prev)}>
        <span className='item__title'>{title}</span>
        <span className="item__plus">
          <img src={plus} alt="Plus" />
        </span>
      </div>
      <div className="item__body">
        <ul className="item__content">
        {children}
        </ul>
      </div>
    </li>
  )
}

export default SelectItem