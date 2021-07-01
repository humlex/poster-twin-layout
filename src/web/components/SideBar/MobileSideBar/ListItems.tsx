import React from 'react';
import { GiHistogram } from 'react-icons/gi';
import { MdAttachMoney } from 'react-icons/md';
import { FiFileText } from 'react-icons/fi';
import { FaWarehouse } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';
import { SiOpenaccess } from 'react-icons/si';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';

import './styles.scss';

const ListItems = () => (
  <ul className="menu-body">
    <li className="menu-item">
      <div className="item">
        <GiHistogram className="logo" />
        <span className="item-name">Статистика</span>
      </div>
      <div className="item-arrow">
        <IoMdArrowDropdown className="arrow-logo" />
      </div>
    </li>
    <li className="menu-item">
      <div className="item">
        <MdAttachMoney className="logo" />
        <span className="item-name">Финансы</span>
      </div>
      <div className="item-arrow">
        <IoMdArrowDropdown className="arrow-logo" />
      </div>
    </li>
    <li className="menu-item">
      <div className="item">
        <FiFileText className="logo" />
        <span className="item-name">Меню</span>
      </div>
      <div className="item-arrow">
        <IoMdArrowDropdown className="arrow-logo" />
      </div>
    </li>
    <li className="menu-item">
      <div className="item">
        <FaWarehouse className="logo" />
        <span className="item-name">Склад</span>
      </div>
      <div className="item-arrow">
        <IoMdArrowDropdown className="arrow-logo" />
      </div>
    </li>
    <li className="menu-item">
      <div className="item">
        <BiStats className="logo" />
        <span className="item-name">Маркетинг</span>
      </div>
      <div className="item-arrow">
        <IoMdArrowDropdown className="arrow-logo" />
      </div>
    </li>
    <li className="menu-item">
      <div className="item">
        <SiOpenaccess className="logo" />
        <span className="item-name">Доступ</span>
      </div>
      <div className="item-arrow">
        <IoMdArrowDropdown className="arrow-logo" />
      </div>
    </li>
    <li className="menu-item">
      <div className="item">
        <IoSettingsOutline className="logo" />
        <span className="item-name">Настройки</span>
      </div>
      <div className="item-arrow">
        <IoMdArrowDropdown className="arrow-logo" />
      </div>
    </li>
  </ul>
);

export default ListItems;
