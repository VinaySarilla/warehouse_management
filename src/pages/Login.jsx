import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    id: null,
    passwordd: null,
  });

  const login = () => {
    if (details.id === "1" && details.password === "admin") {
      localStorage.setItem("loggedin", "true");
      location.href = "/dashboard";
    } else {
      alert("wrong password");
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center my-20">
      <div className="flex flex-col gap-6 bg-blue-50 p-20 text-center rounded-lg">
        <p className="text-lg">Dashboard Login</p>
        <input
          placeholder="Id"
          onChange={(e) => setDetails({ ...details, id: e.target.value })}
          className="h-10 outline-none bg-blue-100 text-center rounded-md"
        />
        <input
          placeholder="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          className="h-10 outline-none bg-blue-100 text-center rounded-md"
        />
        <button
          className="bg-blue-600 h-10 rounded-md text-white text-sm text-center"
          onClick={() => login()}
        >
          Login
        </button>
      </div>
    </div>
  );
}
