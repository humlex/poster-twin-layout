import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import FinishedPannel from "../../components/Main/FinishedPannel";
import { logOutUser } from "../../store/Authorization/actions";
import { IUseSelectorState } from "../../store/types";

const MainPage = () => {
  const dispatch = useDispatch();
  const cash = useSelector(
    (state: IUseSelectorState) => state.Authorization.isLogged
  );

  return (
    <div>
      <FinishedPannel />
      {/* <button onClick={() => dispatch(logOutUser())}>log out</button>
      {!cash && <Redirect to="/" />} */}
    </div>
  );
};

export default MainPage;
