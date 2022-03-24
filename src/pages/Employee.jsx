import React, { useEffect, useState } from "react";
import api from "../api";
import Layout from "../components/Layout";
import handleForm from "../helper";

export default function Employee() {
  const [employees, setEmployees] = useState(null);
  const [form, setForm] = useState({
    name: "",
    role: "",
  });

  useEffect(() => {
    getAllEmployees();
  }, []);

  const newEmployee = () => {
    console.log(form);
    api.addEmployee(form).then((res) => {
      getAllEmployees();
      alert("Successfully Employee Added");
      setForm({
        name: "",
        role: "",
      });
    });
  };

  const getAllEmployees = async () => {
    let employees = await api.getEmployees();
    console.log(employees);
    setEmployees(employees);
  };

  const removeEmployee = (id) => {
    api.deleteEmployee(id).then((res) => {
      getAllEmployees();
      alert("Successfully Employee Removed");
    });
  };

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

      <div className="flex gap-2 pt-5 pb-2 justify-center">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={form.name}
          className="h-10 outline-none bg-slate-100 text-center rounded-md"
          onChange={(e) => setForm(handleForm(e, form))}
        />
        <input
          type="text"
          placeholder="role"
          name="role"
          value={form.role}
          className="h-10 outline-none bg-slate-100 text-center rounded-md"
          onChange={(e) => setForm(handleForm(e, form))}
        />
        <button
          className="bg-blue-600 h-10 rounded-md text-white text-sm text-center px-3"
          onClick={() => newEmployee()}
        >
          Add Employee
        </button>
      </div>
      <table className="w-full text-center my-2 rounded-md bg-slate-50 ">
        <thead>
          <tr className="">
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Present</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee) => {
              return (
                <tr className="py-3">
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.role}</td>
                  <td>{employee.present ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="text-sm bg-red-50 text-red-500 px-2 py-1 rounded-md"
                      onClick={() => removeEmployee(employee.id)}
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
