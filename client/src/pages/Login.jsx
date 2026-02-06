import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const submitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center" action="">
      <div className="flex flex-col gap-3 m-auto items-start sm:min-w-96 p-8 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          {state === "Sign Up"
            ? "Please sign up to book an appointment"
            : "Please sign in to book an appointment"}
        </p>
        {state == "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.name)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.email)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.password)}
            value={password}
            required
          />
        </div>
        <button className="bg-primary text-white py-2 w-full rounded-lg">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state == "Sign Up" ? (
          <p>
            Already have an Account ?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login Here
            </span>{" "}
          </p>
        ) : (
          <p>
            Dont have an Account ?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              SignUp Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
