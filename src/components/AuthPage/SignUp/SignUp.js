import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
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

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updatingEror] = useUpdateProfile(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  let navigate = useNavigate();

  // ============================

  // getting name---------------------
  const handleNameBlur = (e) => {
    setUserInfo({ ...userInfo, others: e.target.value });
  };
  // getting email---------------------
  const handleEmailBlur = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  // getting  password--------------
  const handlePasswordBlur = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (!validPassword) {
      setErrors({ ...errors, passError: "Enter at least 6 ceracter" });
      setUserInfo({ ...userInfo, password: "" });
      return;
    } else {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passError: "" });
    }
  };
  useEffect(() => {
    if (!googleError && googleUser) {
      toast.success("Successfully Account created");
    } else {
      return;
    }
  }, [googleError]);

  // getting confirm password---------------
  const handleConfirmPasswordBlur = (e) => {
    if (userInfo.password === e.target.value) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, confirmError: "" });
    }
    if (userInfo.password !== e.target.value) {
      setErrors({ ...errors, confirmError: "password did not match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }

    return;
  };
  useEffect(() => {
    if (user && !hookError) {
      alert("Updated profile");
      navigate("/home");
    }
    if (hookError) {
      switch (hookError?.code) {
        case "auth/email-already-in-use":
          toast.error("Email already exist");
          break;
        default:
          toast.error(hookError.message);
          break;
      }
    }
    return;
  }, [hookError, user]);

  // submit function ===========
  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!user && userInfo.email && userInfo.confirmPassword) {
      await createUserWithEmailAndPassword(
        userInfo.email,
        userInfo.confirmPassword
      );
      await updateProfile({ displayName: userInfo.others });
      if (user && userInfo.others) {
        toast.error(" Account Already created");
      }
    }
  };

  // console.log(userInfo.email, userInfo.password);
  return (
    <div>
      <div className="form-container">
        <div>
          <h1 className="form-title">SignUp</h1>
          <form button onSubmit={handleCreateUser}>
            {/* onSubmit={handleCreateUser} */}
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                onBlur={handleNameBlur}
                type="name"
                name="name"
                id=""
                required
              />
            </div>
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
                onChange={handlePasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            {errors && (
              <p style={{ color: "red", marginLeft: "20px" }}>
                {errors.passError}
              </p>
            )}
            <div className="input-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                onChange={handleConfirmPasswordBlur}
                type="password"
                name="password"
                id=""
                required
              />
            </div>

            {errors && (
              <p style={{ color: "red", marginLeft: "20px" }}>
                {errors.confirmError}
              </p>
            )}
            <input className="form-submit" type="submit" value="Signup" />
          </form>
          <p className="form-line">
            Already have an account?
            <Link className="form-link" to="/signin">
              Sign in
            </Link>
          </p>
          <div className="hr-container">
            <div className="left-hr">
              <h1> </h1>
            </div>
            <p className="hr-content">or</p>
            <div className="right-hr"></div>
          </div>
          <div className="signIn-btn" onClick={() => signInWithGoogle()}>
            Continue with Google
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid gray",
            padding: "16px",
            color: "#713200",
            width: "100%",
            height: "100%",
            fontSize: "20px",
          },
        }}
      ></Toaster>
    </div>
  );
};

export default SignUp;
