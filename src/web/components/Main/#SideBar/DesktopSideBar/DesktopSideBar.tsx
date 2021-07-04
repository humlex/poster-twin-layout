import React, { useState } from 'react';

import DesktopMenuItem from '../MenuItem/DesktopMenuItem';
import { menuItems } from '../menu-items-list';

import './styles.scss';

const DesktopSideBar = () => {
  const [isActive, setActive] = useState<number | null>(null);

  return (
    <nav className="desktop-sidebar">
      <ul className="menu-body">
        {menuItems.map((menuItem, index) => (
          <DesktopMenuItem
            onClick={() => {
              if (isActive !== index) {
                setActive(index);
              } else {
                setActive(null);
              }
            }}
            icon={menuItem.icon}
            title={menuItem.title}
            submenu={menuItem.submenu}
            isActive={Boolean(isActive === index)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default DesktopSideBar;
