import React, { useState } from "react";
import Helmet from "react-helmet";

function Login(props) {
  const initialState = "";
  const [username, setUsername] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const { title } = props;
  const handleUsername = e => {
    setUsername(e.target.value);
  };
  const handlePass = e => {
    setPassword(e.target.value);
  };
  const submitHandle = () => {
    console.log("cek");
  };
  return (
    <div className="container login">
      <Helmet>
        <title>{title ? title : "Balagendir"}</title>
      </Helmet>
      <div className="login__box">
        <div className="login__logo">
          <img src="/img/login.svg" alt="login" />
        </div>
        <form className="form" onSubmit={submitHandle}>
          <div className="form__user">
            <i>
              <img src="/img/loginIcon.svg" alt="login" />
            </i>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="form__user">
            <i>
              <img src="/img/passIcon.svg" alt="password" />
            </i>

            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePass}
            />
          </div>
          <button type="submit" className="btn">
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
