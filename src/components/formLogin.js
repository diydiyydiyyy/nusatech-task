import React from "react";

const FormLogin = () => {
  return (
    <div>
      <div className="float-right mb-[82px]">
        <p className="font-semibold text-sm text-[#F2F0FF] ">
          Already have an account?{" "}
          <span className="text-[#019A97] cursor-pointer">Login</span>
        </p>
      </div>

      <div className="p-3">
        <h1 className="text-[38px] text-[#F2F0FF] font-medium mb-2">Sign Up</h1>
        <p className="text-xs font-semibold text-[#6F6F6F] mb-6">
          Use Your OpenID to Sign up
        </p>

        <div className="flex justify-start items-center font-semibold text-sm divide-x-2 divide-[#6F6F6F] mb-6 ">
          <p className="text-[#019A97] py-3 px-4">Email</p>
          <p className="text-[#6F6F6F] py-3 px-4">Phone Number</p>
        </div>

        <form>
          <div className="flex flex-col w-1/2">
            <label className="font-normal text-sm text-[#F2F0FF] mb-2">
              Email
            </label>
            <input
              type="email"
              className="rounded-md bg-[#23262F] border border-[#23262F] px-4 py-3"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="font-normal text-sm text-[#F2F0FF] mb-2">
              Password
            </label>
            <input
              type="password"
              className="rounded-md bg-[#23262F] border border-[#23262F] px-4 py-3"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="font-normal text-sm text-[#F2F0FF] mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="rounded-md bg-[#23262F] border border-[#23262F] px-4 py-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
