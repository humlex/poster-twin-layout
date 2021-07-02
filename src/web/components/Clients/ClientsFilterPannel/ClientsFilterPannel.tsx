import React from "react";

import { VscSearch } from "react-icons/vsc";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiPlusSm } from "react-icons/hi";

import "./styles.scss";

const ClientsFilterPannel = () => {
  return (
    <div className="filter-container">
      <div className="search-container">
        <VscSearch className="search-icon" />
        <input
          placeholder="Быстрый поиск"
          type="search"
          className="search-input"
          name="search"
          id="search"
        />
      </div>
      <div className="btn-group">
        <div className="group">
          <span>Группа</span>
          <RiArrowDownSFill />
        </div>
        <div className="filter">
          <HiPlusSm />
          <span>Фильтр</span>
        </div>
      </div>
    </div>
  );
};

export default ClientsFilterPannel;
