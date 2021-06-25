import react, { FC } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import "./styles.scss";

const AuthorizationForm: FC<{}> = () => {
  const validationSchema = yup.object().shape({
    login: yup.string().required("*Введите логин"),
    password: yup.string().required("*Введите пароль"),
  });

  return (
    <>
      <div className="auth__container">
        <img
          className="auth-image"
          src="https://joinposter.com/i/site/blog/cover27_large.jpg"
          alt="form_img"
        />
        <div className="auth-form-container">
          <form action="" className="auth-form">
            <p className="form-title">Вход в систему</p>
            <label htmlFor="login-input">Email</label>
            <input type="text" className="login-input" />
            <label htmlFor="password-input">Пароль</label>
            <input type="text" className="password-input" />
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
        </div>
      </div>
      <footer className="footer"></footer>
    </>
  );
};

export default AuthorizationForm;
