import React, { useState, useRef } from "react";

const LoginForm = ({ onClose }) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleOnBlur = (e) => {
    if (
      !emailRef.current.contains(e.relatedTarget) &&
      !passwordRef.current.contains(e.relatedTarget)
    ) {
      onClose;
    }
  };

  const handleOnChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    console.log(account);
    
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Sign in to your account
        </h2>
        <img
          className="mx-auto h-10 w-auto"
          src="src/assets/solar_home-bold.svg"
          alt="Your Company"
        />
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={(e) => {
            console.log(account)
            e.preventDefault();
            // Login API
            onClose;
            onClose();
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                value={account.email}
                autoFocus={true}
                ref={emailRef}
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                value={account.password}
                name="password"
                type="password"
                ref={passwordRef}
                autoComplete="current-password"
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
