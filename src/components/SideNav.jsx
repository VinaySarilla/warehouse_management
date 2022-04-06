import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideNav({ children }) {
  const [loggedin, setLoggedin] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setLoggedin(true);
    }
  }, []);

  return loggedin ? (
    <div className="w-48 bg-blue-50">
      <div className="flex flex-col min-h-screen gap-4 mx-3 my-10">
        <div
          className={`flex justify-between p-3 text-center rounded-md ${
            location.pathname.includes("dashboard")
              ? `bg-blue-700 text-white`
              : `text-slate-700 bg-blue-100`
          }`}
        >
          <Link to="/dashboard">Dashboard</Link>
          <img
            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-report-project-planing-flatart-icons-outline-flatarticons-1.png"
            height="25px"
            width="25px"
          />
        </div>
        <div
          className={`flex justify-between p-3 text-center rounded-md ${
            location.pathname.includes("vendor")
              ? `bg-blue-700 text-white`
              : `text-slate-700 bg-blue-100`
          }`}
        >
          <Link to="/vendor">Vendor</Link>
          <img
            src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/000000/external-partner-digital-business-photo3ideastudio-lineal-photo3ideastudio.png"
            height="25px"
            width="25px"
          />
        </div>
        <div
          className={`flex justify-between p-3 text-center rounded-md ${
            location.pathname.includes("order")
              ? `bg-blue-700 text-white`
              : `text-slate-700 bg-blue-100`
          }`}
        >
          <Link to="/order">Order</Link>
          <img
            src="https://img.icons8.com/external-bartama-outline-64-bartama-graphic/64/000000/external-Shipping-e-commerce-outline-bartama-outline-64-bartama-graphic.png"
            height="25px"
            width="25px"
          />
        </div>

        <div
          className={`flex justify-between p-3 text-center rounded-md ${
            location.pathname.includes("employee")
              ? `bg-blue-700 text-white`
              : `text-slate-700 bg-blue-100`
          }`}
        >
          <Link to="/employee">Employee</Link>
          <img
            src="https://img.icons8.com/windows/32/000000/person-male.png"
            height="25px"
            width="25px"
          />
        </div>

        <div
          className={`flex justify-between p-3 text-center rounded-md ${
            location.pathname.includes("vehicles")
              ? `bg-blue-700 text-white`
              : `text-slate-700 bg-blue-100`
          }`}
        >
          <Link to="/vehicles">Vehicle</Link>
          <img
            src="https://img.icons8.com/ios-glyphs/90/000000/car--v1.png"
            height="25px"
            width="25px"
          />
        </div>

        <div
          className={`flex justify-between p-3 text-center rounded-md ${
            location.pathname.includes("product")
              ? `bg-blue-700 text-white`
              : `text-slate-700 bg-blue-100`
          }`}
        >
          <Link to="/product">Product</Link>
          <img
            src="https://img.icons8.com/ios/100/000000/product--v1.png"
            height="25px"
            width="25px"
          />
        </div>

        <div
          className={`flex justify-between p-3 text-center rounded-md ${
            location.pathname.includes("logout")
              ? `bg-blue-700 text-white`
              : `text-slate-700 bg-blue-100`
          }`}
        >
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("loggedin");
              setLoggedin(false);
            }}
          >
            Logout
          </Link>
          <img
            src="https://img.icons8.com/ios/100/000000/exit.png"
            height="25px"
            width="25px"
          />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
