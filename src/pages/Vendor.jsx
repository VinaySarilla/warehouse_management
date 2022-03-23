import React from "react";
import Layout from "../components/Layout";

export default function Vendor() {
  return (
    <Layout>
      <div className="flex justify-around">
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">10</p>
          <p className="text-sm">Active</p>
        </div>
        <div className="h-20 w-36 bg-red-50 rounded-lg text-red-500 text-center p-2">
          <p className="text-4xl">30</p>
          <p className="text-sm">InActive</p>
        </div>
        <div className="h-20 w-36 bg-amber-50 rounded-lg text-amber-500 text-center p-2">
          <p className="text-4xl">15</p>
          <p className="text-sm">Pending</p>
        </div>
      </div>

      <table className="w-full text-center my-6 rounded-md bg-slate-50 ">
        <thead>
          <tr className="">
            <th>Id</th>
            <th>Name</th>
            <th>Items</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="py-3">
            <td>1</td>
            <td>Britannia</td>
            <td>10</td>
            <td>Active</td>
            <td>
              <button className="text-sm bg-red-50 text-red-500 px-2 py-1 rounded-md">
                Remove
              </button>
            </td>
          </tr>
          <tr className="py-3">
            <td>2</td>
            <td>Cadbury</td>
            <td>5</td>
            <td>Active</td>
            <td>
              <button className="text-sm bg-red-50 text-red-500 px-2 py-1 rounded-md">
                Remove
              </button>
            </td>
          </tr>
          <tr className="py-3">
            <td>3</td>
            <td>Coca Cola</td>
            <td>10</td>
            <td>Inactive</td>
            <td>
              <button className="text-sm bg-red-50 text-red-500 px-2 py-1 rounded-md">
                Remove
              </button>
            </td>
          </tr>
          <tr className="py-3">
            <td>4</td>
            <td>Lays</td>
            <td>5</td>
            <td>Active</td>
            <td>
              <button className="text-sm bg-red-50 text-red-500 px-2 py-1 rounded-md">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
