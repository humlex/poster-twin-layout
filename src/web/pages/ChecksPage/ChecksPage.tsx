import React from "react";
import TableDropdownMenu from "../../components/Clients/TableDropdownMenu";
import FilterPannel from "../../components/Header/FilterPannel";
import Header from "../../components/Header/Header";

const ChecksPage = () => (
  <>
    <Header title={"Чеки"} menuDropdown={TableDropdownMenu} /> <FilterPannel />
  </>
);

export default ChecksPage;
