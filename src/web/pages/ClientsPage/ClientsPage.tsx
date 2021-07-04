import React from 'react';
import TableDropdownMenu from '../../components/Clients/TableDropdownMenu';
import Header from '../../components/Header/Header';
import FilterPannel from '../../components/Header/FilterPannel';
import ClientsTable from '../../components/Clients/ClientsTable';

const ClientsPage = () => (
  <>
    <Header title={'Клиенты'}>
      <TableDropdownMenu />
    </Header>
    <FilterPannel />
    <ClientsTable />
  </>
);
export default ClientsPage;
