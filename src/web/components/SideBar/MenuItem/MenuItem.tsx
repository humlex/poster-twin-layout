import React from 'react';

import { IoMdArrowDropdown } from 'react-icons/io';

type MenuItemPropsType = {
  icon: string;
  title: string;
};

const MenuItem = ({ icon, title }: MenuItemPropsType) => {
  return (
    <li className="menu-item">
      <div className="item">
        <span className="item-name">{title}</span>
      </div>
      <div className="item-arrow">
        <IoMdArrowDropdown className="arrow-logo" />
      </div>
    </li>
  );
};

export default MenuItem;
