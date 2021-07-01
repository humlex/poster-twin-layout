import React from "react";

import "./styles.scss";

const ClientsTable = () => {
  return (
    <>
      <table className="clients-table">
        <thead className="table-header">
          <tr>
            <th className="header-item">Клиент</th>
            <th className="header-item">Телефон</th>
            <th className="header-item">Без книжки</th>
            <th className="header-item">Наличными</th>
            <th className="header-item">Картой</th>
            <th className="header-item">Прибыль</th>
            <th className="header-item">Чеки</th>
            <th className="header-item">Средний чек</th>
          </tr>
        </thead>
      </table>
      <div className="empty">
        <p className="title">Тут будет статистика покупок клиентов</p>
        <span className="message">
          Добавьте ваших гостей в список клиентов и контролируйте выручка,
          средний чек и количество продаж по каждому из них
        </span>
      </div>
    </>
  );
};

export default ClientsTable;
