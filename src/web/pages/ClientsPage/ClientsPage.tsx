import React from "react";
import ClientsHeader from "../../components/Clients/ClientsHeader";
import ClientsFilterPannel from "../../components/Clients/ClientsFilterPannel";
import ClientsTable from "../../components/Clients/ClientsTable";

const ClientsPage = () => (
  <>
    <ClientsHeader />
    <ClientsFilterPannel />
    <ClientsTable />
  </>
);
export default ClientsPage;
