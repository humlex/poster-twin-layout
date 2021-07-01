import React, { useState } from "react";
import { ImTable2 } from "react-icons/im";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgExport } from "react-icons/cg";
import { AiOutlinePrinter } from "react-icons/ai";

import "./styles.scss";

const ClientsHeader = () => {
  const [startDate, setStartDate] = useState<any>(new Date());

  return (
    <>
      <header className="clients-header">
        <div className="info">
          <span className="title">Клиенты</span>
          <span className="counter">0</span>
        </div>
        <div className="options">
          <div className="filter-dropdown">
            <ImTable2 className="item-icon" />
            <span className="option-item">Столбцы</span>
            <RiArrowDownSFill className="item-icon" />
          </div>
          <div className="export">
            <CgExport className="item-icon" />
            <span className="option-item">Экспорт</span>
          </div>
          <div className="print">
            <AiOutlinePrinter className="item-icon" />
            <span className="option-item">Печать</span>
          </div>
          <div className="calendar">1 липня - 1 червня</div>
        </div>
      </header>
    </>
  );
};

export default ClientsHeader;