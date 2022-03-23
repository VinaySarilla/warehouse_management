import React from "react";
import Layout from "../components/Layout";

export default function Employee() {
  return (
    <Layout>
      <div className="flex justify-around">
        <div className="h-20 w-36 bg-green-50 rounded-lg text-green-500 text-center p-2">
          <p className="text-4xl">10</p>
          <p className="text-sm">Present</p>
        </div>
        <div className="h-20 w-36 bg-red-50 rounded-lg text-red-500 text-center p-2">
          <p className="text-4xl">5</p>
          <p className="text-sm">Absent</p>
        </div>
        <div className="h-20 w-36 bg-amber-50 rounded-lg text-amber-500 text-center p-2">
          <p className="text-4xl">2</p>
          <p className="text-sm">Leave</p>
        </div>
        <div className="h-20 w-36 bg-blue-50 rounded-lg text-blue-500 text-center p-2">
          <p className="text-4xl">6</p>
          <p className="text-sm">Night Shift</p>
        </div>
      </div>

      <table className="w-full text-center my-6 rounded-md bg-slate-50 ">
        <thead>
          <tr className="">
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="py-3">
            <td>1</td>
            <td>Vinay</td>
            <td>Accountant</td>
            <td>Present</td>
            <td>
              <button className="text-sm bg-red-50 text-red-500 px-2 py-1 rounded-md">
                Remove
              </button>
            </td>
          </tr>
          <tr className="py-3">
            <td>2</td>
            <td>Sowmit</td>
            <td>Manager</td>
            <td>Present</td>
            <td>
              <button className="text-sm bg-red-50 text-red-500 px-2 py-1 rounded-md">
                Remove
              </button>
            </td>
          </tr>
          <tr className="py-3">
            <td>3</td>
            <td>Rahul</td>
            <td>Marketing</td>
            <td>Present</td>
            <td>
              <button className="text-sm bg-red-50 text-red-500 px-2 py-1 rounded-md">
                Remove
              </button>
            </td>
          </tr>
          <tr className="py-3">
            <td>4</td>
            <td>Suraj</td>
            <td>Team Lead</td>
            <td>Present</td>
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
