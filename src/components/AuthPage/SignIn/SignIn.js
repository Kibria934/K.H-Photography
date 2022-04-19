import React, { useContext, useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { MyAllDataContex } from "../../../App";
import auth from "../../../firebase.init";
import "./SignIn.css";

const SignIn = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // const [services, setServices] = useContext(MyAllDataContex);
  // console.log(services);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    others: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passError: "",
    confirmError: "",
  });
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (signInError) {
      switch (signInError?.code) {
        case "auth/user-not-found":
          toast.error("Please create an account first");
          break;
        default:
          toast.error(signInError.message);
      }
    }
    if (signInUser) {
      navigate(from, { replace: true });
      // toast("Successfully signede In");
    }
  }, [signInError, signInUser]);
  if (user) {
    navigate(from, { replace: true });
    return toast("Successfully signed In");
  }

  const handleSignIn = () => {
    if (!user) {
      signInWithGoogle();
      navigate(from, { replace: true });
      // toast("Successfully signed In");
    }
  };

  const handleSignInWithPass = (e) => {
    e.preventDefault();
    if (!user) {
      signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    return;
  };
  // getting email---------------------
  const handleEmailBlur = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  // getting  password--------------
  const handlePasswordBlur = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };
  return (
    <div>
      {/* onSubmit={() => signInWithEmailAndPassword(email, password)}onSubmit=
      {() => signInWithEmailAndPassword(email, password)} */}
      <div className="form-container">
        <div>
          <h1 className="form-title">Sign In</h1>
          <form onSubmit={handleSignInWithPass}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            {/* <p>{errors}</p> */}
            <input className="form-submit" type="submit" value="Login" />
          </form>
          <p className="form-line">
            Don't have an account?
            <Link className="form-link" to="/signup">
              Create an account
            </Link>
          </p>
          <p className="form-line">
            Forgotten password?
            <span className="ms-1 text-decoration-underline">
              Reset Password
            </span>
          </p>
          <div className="hr-container">
            <div className="left-hr">
              <h1> </h1>
            </div>
            <p className="hr-content">or</p>
            <div className="right-hr"></div>
          </div>
          <div className="signIn-btn" onClick={handleSignIn}>
            Continue with Google
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SignIn;
