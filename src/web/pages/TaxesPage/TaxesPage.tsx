import React from "react";
import TableDropdownMenu from "../../components/Clients/TableDropdownMenu";
import FilterPannel from "../../components/Header/FilterPannel";
import Header from "../../components/Header/Header";

const TaxesPage = () => (
  <>
    <Header title={"Налоги"} menuDropdown={TableDropdownMenu} />{" "}
    <FilterPannel />
  </>
);
export default TaxesPage;
