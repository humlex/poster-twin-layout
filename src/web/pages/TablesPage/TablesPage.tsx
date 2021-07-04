import React from "react";
import TableDropdownMenu from "../../components/Clients/TableDropdownMenu";
import Header from "../../components/Header/Header";
import FilterPannel from "../../components/Header/FilterPannel";

const TablesPage = () => (
  <>
    <Header title={"Столы"} menuDropdown={TableDropdownMenu} /> <FilterPannel />
  </>
);

export default TablesPage;
