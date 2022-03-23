import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SideNav({ children }) {
  useEffect(() => {
    console.log(children);
  }, []);

  const location = useLocation();

  const changeLocation = () => {
    console.log(location);
  };
  return (
    <div className="w-40 bg-blue-50">
      <div className="flex flex-col min-h-screen gap-4 mx-2 my-10">
        <Link
          to="/dashboard"
          className={`p-1 text-center rounded-md ${
            location.pathname.includes("dashboard")
              ? `bg-blue-700 text-white`
              : `text-blue-700 bg-blue-100`
          }`}
        >
          Dashboard
        </Link>
        <Link
          className={`p-1 text-center rounded-md ${
            location.pathname.includes("vendor")
              ? `bg-blue-700 text-white`
              : `text-blue-700 bg-blue-100`
          }`}
          to="/vendor"
        >
          Vendor
        </Link>
        <Link
          className={`p-1 text-center rounded-md ${
            location.pathname.includes("order")
              ? `bg-blue-700 text-white`
              : `text-blue-700 bg-blue-100`
          }`}
          to="/order"
        >
          Order
        </Link>
        <Link
          className={`p-1 text-center rounded-md ${
            location.pathname.includes("employee")
              ? `bg-blue-700 text-white`
              : `text-blue-700 bg-blue-100`
          }`}
          to="/employee"
        >
          Employee
        </Link>
        <Link
          className={`p-1 text-center rounded-md ${
            location.pathname.includes("product")
              ? `bg-blue-700 text-white`
              : `text-blue-700 bg-blue-100`
          }`}
          to="/product"
          onClick={() => changeLocation()}
        >
          Product
        </Link>
      </div>
    </div>
  );
}
