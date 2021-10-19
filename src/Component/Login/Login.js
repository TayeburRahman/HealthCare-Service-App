import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Firebase/HooksFirebase/useAuth";
import "./Login.css";
import { BsGoogle } from "react-icons/bs";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    signInUsingGoogle,
    error,
    user,
    handleEmailChang,
    handlePasswordChang,
    toggoleLogin,
    handleRegistration,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  const hendlePasGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="row bg-colors">
      <div className="col-md-4"></div>
      <div className="col-md-6 p-5 mt-5 mb-5 form-login rounded">
        <div className="mb-3 form text-left">
          <h3>Please Log In</h3>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleEmailChang}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onBlur={handlePasswordChang}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            onChange={toggoleLogin}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Already Register
          </label> 
        </div>
        <Button
          onClick={handleRegistration}
          type="submit"
          className="Submit-buttons"
        >
          Submit
        </Button>
        <Button
          onClick={hendlePasGoogleLogin}
          type="submit"
          className="btn ms-4 google-button btn-primary"
        >
          <BsGoogle className="google-icon" /> Google{" "}
          <span className="">LogIn</span>
        </Button>
        <div>
          <br />
        <p>If You Do Not Account for Register Fast <Link to="/register"><a>Create New Account</a></Link>  </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
