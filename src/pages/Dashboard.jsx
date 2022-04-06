import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import api from "../api";
export default function Dashboard() {
  const [stats, setStats] = useState({
    employees: 0,
    orders: 0,
    vehicles: 0,
    vendors: 0,
    sales: 0,
  });

  const [unshippedOrders, setOrders] = useState(null);
  const [topProducts, setProducts] = useState(null);

  useEffect(async () => {
    let employees = await api.getEmployees();
    let orders = await api.getOrders();
    let vehicles = await api.getVehicles();
    let vendors = await api.getVendors();

    let sales = 0;
    let unshipped = [];
    let products = [];
    orders.map((order) => {
      sales += order.value;
      if (!order.shipped) {
        unshipped.push(order);
      }

      if(order.value > 100){
        products.push({
          id:order.id,
          product:order.product,
          value:order.value
        })
      }
    });

    setOrders(unshipped)
    setProducts(products)

    setStats({
      employees: employees.length,
      orders: orders.length,
      vehicles: vehicles.length,
      vendors: vendors.length,
      sales,
    });
  }, []);

  return (
    <Layout>
      <div className="flex justify-around">
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">{stats.sales}$</p>
          <p className="text-sm">Sales</p>
        </div>
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">{stats.orders}</p>
          <p className="text-sm">Orders</p>
        </div>
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">{stats.vendors}</p>
          <p className="text-sm">Vendors</p>
        </div>
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">{stats.employees}</p>
          <p className="text-sm">Employees</p>
        </div>
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">{stats.vehicles}</p>
          <p className="text-sm">Vehicles</p>
        </div>
      </div>

      <div className="flex gap-2 justify-around mt-4">
        <p>Unshipped Orders</p>
        <p>High Value Orders</p>
      </div>
      <div className="flex gap-2">
        <table className="w-full text-center my-6 rounded-md bg-slate-50 ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {unshippedOrders &&
              unshippedOrders.map((order) => {
                return (
                  <tr>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{order.value}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <table className="w-full text-center my-6 rounded-md bg-slate-50 ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Item</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {topProducts &&
              topProducts.map((order) => {
                return (
                  <tr>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.value}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
