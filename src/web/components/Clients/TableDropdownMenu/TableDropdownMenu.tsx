import React from "react";
import "./styles.scss";

const TableDropdownMenu = () => {
  return (
    <div className="menu">
      <span className="title">Показывать столбцы:</span>
      <ul className="columns-container">
        <li className="filter-item">
          <input className="checkbox" type="checkbox" name="filter" id="" />
          <span className="column-name">Зал</span>
        </li>
        <li className="filter-item">
          <input className="checkbox" type="checkbox" name="filter" id="" />
          <span className="column-name">Заведение</span>
        </li>
        <li className="filter-item">
          <input className="checkbox" type="checkbox" name="filter" id="" />
          <span className="column-name">Кол-во гостей</span>
        </li>
        <li className="filter-item">
          <input className="checkbox" type="checkbox" name="filter" id="" />
          <span className="column-name">Среднее кол-во гостей</span>
        </li>
        <li className="filter-item">
          <input className="checkbox" type="checkbox" name="filter" id="" />
          <span className="column-name">Кол-во чеков</span>
        </li>
        <li className="filter-item">
          <input className="checkbox" type="checkbox" name="filter" id="" />
          <span className="column-name">Средний чек</span>
        </li>
        <li className="filter-item">
          <input className="checkbox" type="checkbox" name="filter" id="" />
          <span className="column-name">Выручка</span>
        </li>
        <li className="filter-item">
          <input className="checkbox" type="checkbox" name="filter" id="" />
          <span className="column-name">Прибыль</span>
        </li>
      </ul>
      <input type="button" className="default-btn">
        По умолчанию
      </input>
    </div>
  );
};

export default TableDropdownMenu;
