import React, { FC } from "react";
import { MdClear } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import ListItems from "./ListItems";

import "./styles.scss";

interface MenuProps {
  handleSideBarControl: any;
}

const Menu: FC<MenuProps> = ({ handleSideBarControl }) => (
  <>
    <section className="sidebar-menu__wrapper">
      <div className="sidebar-menu">
        <div className="header-menu">
          <MdClear className="close-logo" onClick={handleSideBarControl} />
        </div>
        <ListItems />
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

export default Menu;
