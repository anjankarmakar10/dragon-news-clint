import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import InputField from "../../components/Inputs/InputField";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const { createAccount, updateName, verifyEmail } = useAuth();

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmPassword = confirmPassRef.current.value;

    const onClear = () => {
      name = "";
      email = "";
      password = "";
      confirmPassword = "";
    };

    if (error) {
      window.scrollTo(0, 0);
    }

    if (password < 6) {
      setError("Password at lest 6 char or gratter!");
      return;
    }

    if (name === "") {
      setError("Name can not be empty!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password must be same!!");
      return;
    }

    try {
      setError("");
      setLoading(true);
      const { user } = await createAccount(email, password);
      await updateName(user, name);
      await verifyEmail(user);
      setMessage("Please chack your email to verify the account");
      onClear();
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
            Register your account
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
              refer={nameRef}
              label="Your Name"
              type="text"
              placeholder="Enter your name"
            />
            <InputField
              focus={handleFocus}
              refer={emailRef}
              label="Email address"
              type="email"
              placeholder="Enter your email address"
            />

            <InputField
              focus={handleFocus}
              refer={passRef}
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <InputField
              focus={handleFocus}
              refer={confirmPassRef}
              label="Confirm Password"
              type="password"
              placeholder="Enter your password"
            />

            <div className="flex ">
              <input
                onChange={() => setChecked(!checked)}
                className="cursor-pointer"
                type="checkbox"
              />
              <label
                className="text-[#706F6F] text-base font-semibold"
                htmlFor="trms"
              >
                Accept Term & Conditions
              </label>
            </div>

            <ButtonSubmit disabled={loading || !checked}>Register</ButtonSubmit>
            <span className="text-center font-semibold text-base md:text-lg text-[#706F6F]">
              Already Have An Account? {""}
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

export default SignUp;
