import react, { FC } from "react";
import { Formik } from "formik";

import "./styles.scss";

const AuthorizationForm: FC<{}> = () => {
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
              console.log(values);
              resetForm();
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
    </>
  );
};

export default AuthorizationForm;
