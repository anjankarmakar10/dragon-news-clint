import React from "react";
import Header from "../../components/Header/Header";
import InputField from "../../components/Inputs/InputField";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Header isLogo={false} isBreaking={false} />
      <div className="max-w-2xl mx-auto px-4 py-8 min-h-[90vh]">
        <section className="rounded-md w-full px-8 bg-white border py-14">
          <h2 className="pb-6 mb-6 border-b-2 w-full text-center font-semibold text[#403F3F] text-2xl md:text-4xl ">
            Register your account
          </h2>

          <form className="w-full flex flex-col gap-6">
            <InputField
              label="Your Name"
              type="text"
              placeholder="Enter your name"
            />
            <InputField
              label="Email address"
              type="email"
              placeholder="Enter your email address"
            />

            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Enter your password"
            />

            <div className="flex ">
              <input className="cursor-pointer" type="checkbox" />
              <label
                className="text-[#706F6F] text-base font-semibold"
                htmlFor="trms"
              >
                Accept Term & Conditions
              </label>
            </div>

            <ButtonSubmit>Register</ButtonSubmit>
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
