import React, { FC, useState } from "react";
import { ImTable2 } from "react-icons/im";
import { RiArrowDownSFill } from "react-icons/ri";
import { CgExport } from "react-icons/cg";
import { AiOutlinePrinter } from "react-icons/ai";

import "./styles.scss";

interface HeaderProps {
  title: string;
  children?: React.ReactChild;
}

const Header: FC<HeaderProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="clients-header">
        <div className="info">
          <span className="title">{title}</span>
          <span className="counter">0</span>
        </div>
        <div className="options">
          <div className="filter-dropdown">
            <ImTable2 className="item-icon" />
            <span
              className="option-item"
              onClick={() => {
                setIsOpen(!isOpen);
                console.log(isOpen);
              }}
            >
              Столбцы
            </span>
            <RiArrowDownSFill className="item-icon" />
            {isOpen && children}
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

export default Header;
