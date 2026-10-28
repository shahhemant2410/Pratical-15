
import React, { useRef, useState } from "react";

function App() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    setSubmittedData({
      username,
      password,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-indigo-700">
            Login Form
          </h1>
          <p className="mt-2 text-gray-500">
            Uncontrolled Component Example
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              ref={usernameRef}
              placeholder="Enter username"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Login
          </button>
        </form>

        {submittedData && (
          <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
            <h2 className="mb-4 text-xl font-bold text-green-700">
              Submitted Information
            </h2>

            <p className="mb-2 break-words text-gray-700">
              <strong>Username:</strong>{" "}
              {submittedData.username}
            </p>

            <p className="break-words text-gray-700">
              <strong>Password:</strong>{" "}
              {submittedData.password}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
