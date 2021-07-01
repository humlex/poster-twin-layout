import React from 'react';

import DesktopSideBar from './DesktopSideBar';
import MobileSideBar from './MobileSideBar';

const SideBar = () => {
  return (
    <>
      <DesktopSideBar />
      <MobileSideBar />
    </>
  );
};

export default SideBar;
