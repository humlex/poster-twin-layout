import react, { FC } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { logInUser, logOutUser } from "../../store/Authorization/actions";
import { IUserData } from "../../store/types";
import { IUseSelectorState } from "../../store/types";
import "./styles.scss";

const AuthorizationForm: FC<{}> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cash = useSelector(
    (state: IUseSelectorState) => state.Authorization.isLogged
  );

  return (
    <>
      <div className="auth__container">
        <img
          className="auth-image"
          src="https://joinposter.com/i/site/blog/cover27_large.jpg"
          alt="form_img"
        />
        <div className="auth-form-container">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, { resetForm }) => {
              console.log(1, cash);
              dispatch(logInUser(values));
              // if (cash) {
              //   console.log(2, cash);
              //   history.push("/home");
              // }
              // resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <form action="" className="auth-form" onSubmit={handleSubmit}>
                <p className="form-title">Вход в систему</p>
                <label htmlFor="login-input">Email</label>
                <input
                  type="text"
                  className="login-input"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <label htmlFor="password-input">Пароль</label>
                <input
                  type="password"
                  className="password-input"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <div className="another-pc__container">
                  <input
                    className="another-pc-checkbox"
                    type="checkbox"
                    name="auth-checkbox"
                  />
                  <a href="#" className="another-pc-link">
                    Чужой компьютер
                  </a>
                </div>
                <div className="submit__container">
                  <button type="submit" className="submit-btn">
                    Войти
                  </button>
                  <a href="" className="forgot-password">
                    Забыли пароль?
                  </a>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <footer className="footer">
        <a href="#" className="poster">
          Poster
        </a>
        <a href="#" className="support">
          Техническая поддержка
        </a>
      </footer>
      {cash && <Redirect to="home" />}
      <button
        onClick={() => {
          dispatch(logOutUser());
          console.log("isLogged: ", cash);
        }}
      >
        Вход
      </button>
      <button>Выход</button>
    </>
  );
};

export default AuthorizationForm;
