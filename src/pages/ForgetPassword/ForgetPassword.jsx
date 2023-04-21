import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import InputField from "../../components/Inputs/InputField";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const ForgetPassword = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const { createAccount } = useAuth();

  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;

    try {
      setError("");
      setLoading(true);
      setMessage("Please chack your email to farther informations");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFocus = () => {
    setError("");
    setMessage("");
    setLoading(false);
  };

  return (
    <>
      <Header isLogo={false} isBreaking={false} />
      <div className="max-w-2xl mx-auto px-4 py-8 min-h-[90vh]">
        <section className="rounded-md w-full px-8 bg-white border py-14">
          <h2 className="pb-6 mb-6 border-b-2 w-full text-center font-semibold text[#403F3F] text-2xl md:text-4xl ">
            Reset your Password
          </h2>

          {error && (
            <div className="bg-[#E8F0FE] p-2 rounded-md text-sm font-semibold text-[#fd3636] mb-2">
              {error}
            </div>
          )}
          {message && (
            <div className="bg-[#06bb4b] p-2 rounded-md text-sm font-semibold text-[#ffffff] mb-2">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <InputField
              focus={handleFocus}
              refer={emailRef}
              label="Email address"
              type="email"
              placeholder="Enter your email address"
            />

            <ButtonSubmit>Reset Password</ButtonSubmit>
            <span className="text-center font-semibold text-base md:text-lg text-[#403F3F]">
              Go to {""}
              <Link to="/login" className="text-[#FB7453]">
                Login
              </Link>
            </span>
          </form>
        </section>
      </div>
    </>
  );
};

export default ForgetPassword;
