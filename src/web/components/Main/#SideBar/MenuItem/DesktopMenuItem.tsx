import React, { useState } from 'react';

import './styles.scss';

type DesktopMenuItemPropsType = {
  icon: any;
  title: string;
  submenu?: { title: string; link: string }[] | undefined;
  isActive: boolean;
  onClick: () => void;
};

const DesktopMenuItem = ({
  icon: Icon,
  title,
  submenu,
  isActive,
  onClick,
}: DesktopMenuItemPropsType) => {
  return (
    <li
      className={isActive ? 'menu-item active' : 'menu-item'}
      onClick={onClick}
    >
      <div className="item">
        <Icon className="logo" />
        <span className={isActive ? 'item-name active' : 'item-name'}>
          {title}
        </span>
      </div>
      {submenu && (
        <ul className={isActive ? 'submenu active' : 'submenu inactive'}>
          {submenu?.map((el) => (
            <a href={el.link} className="submenu__link">
              {el.title}
            </a>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DesktopMenuItem;
