import React from 'react';
import { Route } from 'react-router-dom';

import Sidebar from '../components/Main/#SideBar';

const DashboardRoute = (props: any) => {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <main className="main-page-wrapper">
        <Route {...props} />
      </main>
    </div>
  );
};

export default DashboardRoute;
