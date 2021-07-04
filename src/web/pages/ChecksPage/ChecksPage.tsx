import React from 'react';
import TableDropdownMenu from '../../components/Clients/TableDropdownMenu';
import FilterPannel from '../../components/Header/FilterPannel';
import Header from '../../components/Header/Header';

const ChecksPage = () => (
  <>
    <Header title={'Чеки'}>
      <TableDropdownMenu />
    </Header>
    <FilterPannel />
  </>
);

export default ChecksPage;
