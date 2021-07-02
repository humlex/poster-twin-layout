import React from 'react';

import { IoMdArrowDropdown } from 'react-icons/io';

import './styles.scss';

type MobileMenuItemPropsType = {
  icon: any;
  title: string;
  submenu?: { title: string; link: string }[] | undefined;
  isActive: boolean;
  onClick: () => void;
};

const MobileMenuItem = ({
  icon: Icon,
  title,
  submenu,
  isActive,
  onClick,
}: MobileMenuItemPropsType) => {
  return (
    <li className="menu-item" onClick={onClick}>
      <div>
        <div className="item arrow-enabled">
          <Icon className="logo" />
          <span className="item-name">{title}</span>
        </div>
        <div className="item-arrow">
          <IoMdArrowDropdown className="arrow-logo" />
        </div>
      </div>
      <div>
        {submenu && (
          <ul className={isActive ? 'submenu active' : 'submenu inactive'}>
            {submenu?.map((el) => (
              <a href={el.link} className="submenu__link">
                {el.title}
              </a>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default MobileMenuItem;
