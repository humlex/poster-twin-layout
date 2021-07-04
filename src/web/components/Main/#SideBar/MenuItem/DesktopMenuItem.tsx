import React, { useState } from 'react';
import cn from 'classnames';

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
      className={cn('menu-item', { active: isActive })}
      onClick={onClick}
      style={isActive ? { height: submenu ? submenu?.length * 40 : 40 } : {}}
    >
      <div className="item">
        <Icon className="logo" />
        <span className={cn('item-name', { active: isActive })}>{title}</span>
      </div>
      {submenu && (
        <ul className={cn('submenu', { active: isActive })}>
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
