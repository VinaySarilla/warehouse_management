import React, { useEffect, useState } from "react";
import api from "../api";
import Layout from "../components/Layout";
import handleForm from "../helper";

export default function Vendor() {
  const [Vendors, setVendors] = useState(null);
  const [form, setForm] = useState({
    name: null,
  });

  useEffect(() => {
    getAllVendors();
  }, []);

  const newVendor = () => {
    console.log(form);
    api.addVendor(form).then((res) => {
      getAllVendors();
      alert("Successfully Vendor Added");
      setForm({
        name: null,
      });
    });
  };

  const getAllVendors = async () => {
    let Vendors = await api.getVendors();
    console.log(Vendors);
    setVendors(Vendors);
  };

  const removeVendor = (id) => {
    api.deleteVendor(id).then((res) => {
      getAllVendors();
      alert("Successfully Vendor Removed");
    });
  };

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

      <div className="flex gap-2 pt-5 pb-2 justify-center">
        <input
          type="text"
          placeholder="name"
          name="name"
          className="h-10 outline-none bg-slate-100 text-center rounded-md"
          onChange={(e) => setForm(handleForm(e, form))}
        />
        <button
          className="bg-blue-600 h-10 rounded-md text-white text-sm text-center px-3"
          onClick={() => newVendor()}
        >
          Add Vendor
        </button>
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
          {Vendors &&
            Vendors.map((vendor) => {
              return (
                <tr className="py-3">
                  <td>{vendor.id}</td>
                  <td>{vendor.name}</td>
                  <td>{vendor.items}</td>
                  <td>{vendor.status ? "Active" : "InActive"}</td>
                  <td>
                    <button
                      className="text-sm bg-red-50 text-red-500 px-2 py-1 rounded-md"
                      onClick={() => removeVendor(vendor.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Layout>
  );
}
