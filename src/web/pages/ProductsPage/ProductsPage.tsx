import React from "react";
import TableDropdownMenu from "../../components/Clients/TableDropdownMenu";
import Header from "../../components/Header/Header";
import FilterPannel from "../../components/Header/FilterPannel";

const ProductsPage = () => (
  <>
    <Header title={"Товары"} menuDropdown={TableDropdownMenu} />
    <FilterPannel />
  </>
);

export default ProductsPage;
