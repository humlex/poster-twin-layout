import React from "react";
import { IoRocket } from "react-icons/io5";

import "./styles.scss";

const FinishPannel = () => {
  return (
    <div className="finish-pannel__container">
      <img
        className="finish-icon"
        src="	https://st-smokes-talks.joinposter.com/i/manage/emoji/rocket@2x.png"
        alt="rocket"
      />
      <div className="title">Регистрация завершена!</div>
      <div className="message">
        Ви зарегистрировались в Poster. Теперь мы познакомим вас с системой с
        помощью небольшого обзорного тура.
      </div>
      <button type="submit" className="continue-btn">
        Продолжить
      </button>
    </div>
  );
};

export default FinishPannel;
