import React, { useState } from "react";
import Header from "./components/Header";

const RetrievePerson = () => {
  const [aadharInput, setAadharInput] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const data = JSON.parse(localStorage.getItem("persons") || "[]");
    const match = data.find((item) => item.aadhar === aadharInput);
    setResult(match || false);
  };

  return (
    <>
    <Header />
    <div>
      <input
        value={aadharInput}
        onChange={(e) => setAadharInput(e.target.value)}
        placeholder="Enter Aadhar Number"
        className="border px-2 py-1 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-1 rounded">
        Search
      </button>
      {result === null ? null : result === false ? (
        <p className="mt-4 text-red-500">No match found.</p>
      ) : (
        <table className="mt-4 w-full border border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2">Name</th>
              <th className="border px-2">DOB</th>
              <th className="border px-2">Aadhar</th>
              <th className="border px-2">Mobile</th>
              <th className="border px-2">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2">{result.name}</td>
              <td className="border px-2">{result.dob}</td>
              <td className="border px-2">{result.aadhar}</td>
              <td className="border px-2">{result.mobile}</td>
              <td className="border px-2">{result.age}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default RetrievePerson;