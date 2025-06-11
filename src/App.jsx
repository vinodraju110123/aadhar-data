import React, { useState } from "react";
import Header from "./components/Header";

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const AddPerson = () => {
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        name: "",
        dob: "",
        aadhar: "",
        mobile: "",
        age: "",
        saved: false,
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    if (field === "dob") {
      updatedRows[index].age = calculateAge(value);
    }
    setRows(updatedRows);
  };

  const handleSave = (index) => {
    const row = rows[index];
    if (!row.name || !row.dob || !row.aadhar || !row.mobile) {
      alert("All fields are required.");
      return;
    }
    if (!/^\d{12}$/.test(row.aadhar)) {
      alert("Aadhar must be 12 digits.");
      return;
    }
    if (!/^\d{10}$/.test(row.mobile)) {
      alert("Mobile must be 10 digits.");
      return;
    }

    let existing = JSON.parse(localStorage.getItem("persons") || "[]");
    existing.push({ ...row, saved: true });
    localStorage.setItem("persons", JSON.stringify(existing));

    const updatedRows = [...rows];
    updatedRows[index].saved = true;
    setRows(updatedRows);
  };

  const handleDelete = (index) => {
    const row = rows[index];
    if (row.saved) {
      let existing = JSON.parse(localStorage.getItem("persons") || "[]");
      existing = existing.filter((r) => r.aadhar !== row.aadhar);
      localStorage.setItem("persons", JSON.stringify(existing));
    }
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <>
    <Header />
    <div className="w-screen h-screen flex justify-center">
    <div className="flex flex-col gap-0.5 border-2 items-center w-6xl p-20 relative">
      <label className="abolute absolute top-0 left-0 border-2 w-1/6 h-11">Add New Person</label>
      <table className="w-full border border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-2">Name</th>
            <th className="border px-2">DOB</th>
            <th className="border px-2">Aadhar</th>
            <th className="border px-2">Mobile</th>
            <th className="border px-2">Age</th>
            <th className="border px-2">Actions</th>
          </tr>
        </thead>
        <tbody >
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border px-2">
                <input
                  value={row.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                  className="w-full border"
                />
              </td>
              <td className="border px-2">
                <input
                  type="date"
                  value={row.dob}
                  onChange={(e) => handleChange(index, "dob", e.target.value)}
                  className="w-full border"
                />
              </td>
              <td className="border px-2">
                <input
                  value={row.aadhar}
                  onChange={(e) => handleChange(index, "aadhar", e.target.value)}
                  className="w-full border"
                />
              </td>
              <td className="border px-2">
                <input
                  value={row.mobile}
                  onChange={(e) => handleChange(index, "mobile", e.target.value)}
                  className="w-full border"
                />
              </td>
              <td className="border px-2">{row.age}</td>
              <td className="border px-2">
                <button
                  onClick={() => handleSave(index)}
                  className="bg-blue-500 text-white px-2 py-1 mr-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleAddRow}
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded absolute bottom-5 right-5"
      >
        Add Row
      </button>
    </div>
    </div>
    </>
  );
};

export default AddPerson;