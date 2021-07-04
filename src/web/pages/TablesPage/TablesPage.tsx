import React from 'react';
import TableDropdownMenu from '../../components/Clients/TableDropdownMenu';
import Header from '../../components/Header/Header';
import FilterPannel from '../../components/Header/FilterPannel';

const TablesPage = () => (
  <>
    <Header title={'Столы'}>
      <TableDropdownMenu />
    </Header>{' '}
    <FilterPannel />
  </>
);

export default TablesPage;
