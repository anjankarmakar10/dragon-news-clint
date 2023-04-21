import React from "react";
import Header from "../../components/Header/Header";
import InputField from "../../components/Inputs/InputField";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import { Link } from "react-router-dom";
import LoginContainer from "../Home/components/login/LoginContainer";
import GoogleLogin from "../../components/buttons/GoogleLogin";
import GitHubLogin from "../../components/buttons/GitHubLogin";

const Login = () => {
  return (
    <>
      <Header isLogo={false} isBreaking={false} />
      <div className="max-w-2xl mx-auto px-4 py-8 min-h-[90vh]">
        <section className="rounded-md w-full px-8 bg-white border py-14">
          <h2 className="pb-6 mb-6 border-b-2 w-full text-center font-semibold text[#403F3F] text-2xl md:text-4xl ">
            Login your account
          </h2>

          <form className="w-full flex flex-col gap-6">
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
            <ButtonSubmit>Login</ButtonSubmit>
            <div className="text-center font-semibold text-base my-[-10px] text-[#5a5a5a] flex justify-evenly items-center px-4">
              <div className="flex-1 bg-[#706F6F] h-[1px] w-full"></div>
              <div className="flex-1">Continue With</div>
              <div className="flex-1 bg-[#706F6F] h-[1px]"></div>
            </div>
            <div className="flex flex-col gap-2 mb-3 w-full">
              <GoogleLogin />
              <GitHubLogin />
            </div>

            <span className="text-center font-semibold text-base md:text-lg text-[#706F6F]">
              Don’t Have An Account?{" "}
              <Link to="/signup" className="text-[#FB7453]">
                Register
              </Link>
            </span>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
