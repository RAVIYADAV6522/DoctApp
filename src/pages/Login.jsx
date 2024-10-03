import React, { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="flex flex-col gap-4 shadow-2xl p-16 border rounded-xl md:w-2/3 sm:min-h-96 lg:w-3/6">
        <p className="text-3xl text-gray-600 font-medium">
          {state ? "Create Account" : "Login"}
        </p>
        <p className="text-gray-600 text-xl">
          please {state ? "sign up" : "log in"} to book appointment
        </p>

        <div>
          {state && (
            <div className="mb-3 flex flex-col md:w-2/3 gap-2">
              <p className="text-gray-600">Full Name</p>
              <input
                // e refers action or something happened , target will point where that action has happend and we will get the value
                className="border h-10 rounded-xl"
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
                value={name}
                required
              ></input>
            </div>
          )}

          <div className="mb-3 flex flex-col md:w-2/3 gap-2">
            <p className="text-gray-600">Email</p>
            <input
              className="border h-10 rounded-xl"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              value={email}
              required
            ></input>
          </div>

          <div className="mb-3 flex flex-col md:w-2/3 gap-2">
            <p className="text-gray-600">Password</p>
            <input
              className="border h-10 rounded-xl"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              value={password}
              required
            ></input>
          </div>
        </div>

        <div className="flex justify-center sm:w-2/3 bg-primary py-3 px-8 text-white rounded-xl">
          <button>{state ? "Create account" : "Login"}</button>
        </div>
        <div>
          <button>
            {state ? "Create a new" : "Already have an"} account ?
            <span
              className="underline text-blue-600"
              onClick={() => setState(!state)}
            >
              {state ? "Click here" : "Login here"}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
