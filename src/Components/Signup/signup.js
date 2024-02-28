"use client";

import React, { useState } from "react";
import Image from "next/image";
import signupimg from "../../images/signup.jpg";
import styles from "../Signup/signup.module.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const signup = () => {
  const [showPasword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleShow = () => {
    setShowPassword(!showPasword);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.bgimage}>
        <div className={styles.optioncontainer}>
          <div className={styles.individualoption}>
            <div className={styles.signupoptions}>
              <p>1</p>
            </div>
            <div className={styles.paraoptions}>
              <p>Register as Student</p>
            </div>
          </div>

          <div className={styles.individualoption}>
          <div className={styles.signupoptions}>
            <p>2</p>
          </div>
          <div className={styles.paraoptions}>
            <p>Signin as Tutor</p>
          </div>
          </div>
       
        </div>
      </div>

      <div className={styles.signup}>
        <div>
          <h2 className={styles.signupheading}>Personal Information</h2>
          <p className={styles.signupparagraph}>
            Please provide the credentials below
          </p>
        </div>
        <div>
          <div>
            <input placeholder="Email" type="email" className={styles.inputs} />
          </div>
          <div className={styles.inputcontainer}>
            <input
              placeholder="password"
              className={styles.inputspassword}
              onChange={passwordChange}
              type={showPasword ? "text" : "password"}
              value={password}
            />
            <span
              onClick={(e) => handleShow(e.target.value)}
              className={styles.inputicon}
            >
              {showPasword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
            </span>
          </div>

          <div>
            <input
              placeholder="Registration Number"
              className={styles.inputs}
            />
          </div>

          <div>
            <button className={styles.signupbtn}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
