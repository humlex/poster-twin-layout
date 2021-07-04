import React from "react";
import Header from "../../components/Header/Header";
import FilterPannel from "../../components/Header/FilterPannel";
import ClientsTable from "../../components/Clients/ClientsTable";

const ClientsPage = () => (
  <>
    <Header title={"Клиенты"} />
    <FilterPannel />
    <ClientsTable />
  </>
);
export default ClientsPage;
