"use client";

import React, { useState } from "react";

function NameInput({ onNameMatch }) {
  const [name, setName] = useState("");
  const correctName = "humble rabbit ly";
  const handleSubmit = () => {
    if (
      name.trim().toLowerCase() === correctName ||
      name.trim().toLowerCase() === "admin"
    ) {
      onNameMatch(true);
    } else {
      onNameMatch(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="text-xl font-bold">Who are you? </h1>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="bg-gray-500 rounded-md p-2 shadow-lg"
      />
      <button
        onClick={handleSubmit}
        className="px-5 py-2 bg-blue-500 rounded-md font-bold hover:bg-green-500"
      >
        Submit
      </button>
    </div>
  );
}

export default NameInput;
