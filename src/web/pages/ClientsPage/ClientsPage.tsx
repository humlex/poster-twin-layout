import React from "react";
import ClientsHeader from "../../components/ClientsHeader";
import ClientsFilterPannel from "../../components/ClientsFilterPannel";
import ClientsTable from "../../components/ClientsTable";

const ClientsPage = () => (
  <>
    <ClientsHeader />
    <ClientsFilterPannel />
    <ClientsTable />
  </>
);
export default ClientsPage;
