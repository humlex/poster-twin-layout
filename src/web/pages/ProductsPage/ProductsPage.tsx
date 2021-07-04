import React from 'react';
import TableDropdownMenu from '../../components/Clients/TableDropdownMenu';
import Header from '../../components/Header/Header';
import FilterPannel from '../../components/Header/FilterPannel';

const ProductsPage = () => (
  <>
    <Header title={'Товары'}>
      <TableDropdownMenu />
    </Header>
    <FilterPannel />
  </>
);

export default ProductsPage;
