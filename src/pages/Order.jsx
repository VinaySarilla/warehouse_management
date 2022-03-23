import React from "react";
import Layout from "../components/Layout";

export default function Order() {
  return (
    <Layout>
      <div className="flex justify-around">
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">10</p>
          <p className="text-sm">Conf irmed</p>
        </div>
        <div className="h-20 w-36 bg-red-50 rounded-lg text-red-500 text-center p-2">
          <p className="text-4xl">30</p>
          <p className="text-sm">Packed</p>
        </div>
        <div className="h-20 w-36 bg-amber-50 rounded-lg text-amber-500 text-center p-2">
          <p className="text-4xl">70</p>
          <p className="text-sm">Shipped</p>
        </div>
        <div className="h-20 w-36 bg-blue-50 rounded-lg text-blue-500 text-center p-2">
          <p className="text-4xl">60</p>
          <p className="text-sm">Delivered</p>
        </div>
      </div>
      <table className="w-full text-center my-6 rounded-md bg-slate-50 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Item</th>
            <th>Vendor</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="py-3 ">
            <td>1</td>
            <td>Marie Biscuit</td>
            <td>Britannia</td>
            <td>100</td>
            <td>1000</td>
            <td>
              <select className="outline-none text-sm">
                <option value="Confirmed">Confirmed</option>
                <option value="Packed">Packed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </td>
          </tr>
          <tr className="py-3 ">
            <td>2</td>
            <td>Dairy Milk Chocolate</td>
            <td>Cadbury</td>
            <td>1000</td>
            <td>10000</td>
            <td>
              <select className="outline-none text-sm">
                <option value="Confirmed">Confirmed</option>
                <option value="Packed">Packed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </td>
          </tr>
          <tr className="py-3 ">
            <td>3</td>
            <td>Coke</td>
            <td>Coca Cola</td>
            <td>1000</td>
            <td>10000</td>
            <td>
              <select className="outline-none text-sm">
                <option value="Confirmed">Confirmed</option>
                <option value="Packed">Packed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </td>
          </tr>
          <tr className="py-3 ">
            <td>4</td>
            <td>Cream & Onion</td>
            <td>Lays</td>
            <td>100</td>
            <td>1000</td>
            <td>
              <select className="outline-none text-sm">
                <option value="Confirmed">Confirmed</option>
                <option value="Packed">Packed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
