import React from 'react';

import { IoMdArrowDropdown } from 'react-icons/io';

import './styles.scss';

type MobileMenuItemPropsType = {
  icon: any;
  title: string;
};

const MobileMenuItem = ({ icon: Icon, title }: MobileMenuItemPropsType) => {
  return (
    <li className="menu-item arrow-enabled">
      <div className="item">
        <Icon className="logo" />
        <span className="item-name">{title}</span>
      </div>
      <div className="item-arrow">
        <IoMdArrowDropdown className="arrow-logo" />
      </div>
    </li>
  );
};

export default MobileMenuItem;
