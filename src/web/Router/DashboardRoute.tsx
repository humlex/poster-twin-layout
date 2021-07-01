import React from 'react';
import { Route } from 'react-router-dom';

import Sidebar from '../components/SideBar';

const DashboardRoute = (props: any) => {
  return (
    <div>
      <Sidebar />

      <main>
        <Route {...props} />
      </main>
    </div>
  );
};

export default DashboardRoute;
