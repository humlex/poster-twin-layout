import React from 'react';
import TableDropdownMenu from '../../components/Clients/TableDropdownMenu';
import FilterPannel from '../../components/Header/FilterPannel';
import Header from '../../components/Header/Header';

const PaymanetsPage = () => (
  <>
    <Header title={'Оплаты'}>
      <TableDropdownMenu />
    </Header>
    <FilterPannel />
  </>
);

export default PaymanetsPage;
