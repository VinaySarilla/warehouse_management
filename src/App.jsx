import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/SideNav";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Product from "./pages/Product";
import Vendor from "./pages/Vendor";
import SideNav from "./components/SideNav";
import Order from "./pages/order";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="flex h-full">
        <SideNav />
        <div>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="employee" element={<Employee />} />
            <Route path="product" element={<Product />} />
            <Route path="vendor" element={<Vendor />} />
            <Route path="order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
