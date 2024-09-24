/* eslint-disable no-unused-vars */
import React from "react";

const Register = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4 text-teal-500">Create Account</h2>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
