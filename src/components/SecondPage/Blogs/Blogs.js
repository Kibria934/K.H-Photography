import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="card-boxs">
      <div className="container py-4 card-container">
        <div className="card m-2 px-4">
          <h4 className="card-title">
            Q1. The defference between Authentication and Authorization
          </h4>
          <p className="card-body">
            <strong>Ans:</strong>
            <br />
            Authentication:
            <ol>
              <li>
                Authentication is the process of finding some data of user and
                than check it that is this user are legal of not.
              </li>
              <li>
                In this system we can select the original user of a website.
              </li>
              <li>
                This process are help us to protect an website from an ileal.
              </li>
            </ol>
            <p> Authorization:</p>
            <ol>
              <li>
                This is a permission for user that he can use website or not
              </li>
              <li>Authorization occur after Authentication</li>
              <li>Authorization controller is the owner of website</li>
            </ol>
          </p>
        </div>
        <div className="card px-4 m-2">
          <h4 className="card-title">
            Q2. Why are you using firebase? What other options do you have to
            implement authentication?
          </h4>
          <p>
            <strong>Ans:</strong>
            <br />
            <ol>
              Firs:
              <li>
                Firebase is like security which is help us to save our user
                data.
              </li>
              <li>
                It help us to authenticate users password,email,google
                account,facebook etc
              </li>
              <li> It is a complete process of authentication</li>
            </ol>
            second: Alternative of firebaser are:
            <br />
            <li>Parse - Open Source Backend Platform;</li>{" "}
            <li>Back4app - Parse Hosting Platform;</li>{" "}
            <li>
              Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise;
            </li>
            <li>Backendless - Mobile Backend and API Services Platform;</li>
            <li>
              Kuzzle -Backend for web, hybrid, or native mobile apps and IoT
              projects;
            </li>
            <li> Pubnub - Real-time APIs and Global Messaging;</li>{" "}
            <li>Kumulos - App Performance Management;</li>
          </p>
        </div>
        <div className="px-4 m-2 card">
          <h4>
            Q3.What other services does firebase provide other than
            authentication
          </h4>
          <p>
            <strong>Ans: Firebase provide us:</strong>
            <br />
            <ol>
              <li>Firebase Database</li>
              <li>Google Analytics for Firebase</li>
              <li>Firebase Cloud Messaging</li>
              <li>Firebase plateform</li>
              <li>Firebase Hoisting</li>
              <li>Firebase app check</li>
              <li>Firebae dynamic link</li>
              <li>Firebase performance monitoring. etc</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
