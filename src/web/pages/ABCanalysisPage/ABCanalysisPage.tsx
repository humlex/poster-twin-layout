import React from "react";
import TableDropdownMenu from "../../components/Clients/TableDropdownMenu";
import FilterPannel from "../../components/Header/FilterPannel";
import Header from "../../components/Header/Header";

const ABCanalysisPage = () => (
  <>
    <Header title={"ABC"} menuDropdown={TableDropdownMenu} /> <FilterPannel />
  </>
);

export default ABCanalysisPage;
