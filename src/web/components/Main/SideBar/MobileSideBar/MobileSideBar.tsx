import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';

import Menu from './Menu';

import './styles.scss';

export const MobileSideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSideBarControl = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sidebar__header">
        <div className="logo__container">
          <MdMenu className="menu-logo" onClick={handleSideBarControl} />
          <span className="logo-name">Poster</span>
        </div>
      </header>
      {isOpen && <Menu handleSideBarControl={handleSideBarControl} />}
    </>
  );
};

export default MobileSideBar;
