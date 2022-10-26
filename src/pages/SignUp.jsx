import React from "react";
import "./StylesPage.css";
import SignUpForm from "../components/SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <div className="sign-up">
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}
