import React, { FC, useState } from 'react';
import { MdClear } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';

import MenuItem from '../MenuItem/MobileMenuItem';

import { menuItems } from '../menu-items-list';
import './styles.scss';

interface MenuProps {
  handleSideBarControl: any;
}

const Menu: FC<MenuProps> = ({ handleSideBarControl }) => {
  const [isActive, setActive] = useState<number | null>(null);

  return (
    <>
      <section className="sidebar-menu__wrapper">
        <div className="sidebar-menu">
          <div className="header-menu">
            <MdClear className="close-logo" onClick={handleSideBarControl} />
          </div>
          <ul className="menu-body">
            {menuItems.map((menuItem, index) => (
              <MenuItem
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
          <div className="footer">
            <div className="user__container">
              <HiOutlineUserCircle className="user-img" />
              <div className="username">Username</div>
              <IoMdArrowDropdown className="arrow-logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
