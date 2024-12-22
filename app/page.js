"use client";
import Image from "next/image";
import { useState } from "react";
import NameInput from "./components/NameInput";
import GiftBox from "./components/GiftBox";

export default function Home() {
  const [isMatch, setIsMatch] = useState(null);

  const handleReset = () => {
    setIsMatch(null);
  };
  return (
    <div
      className={`h-dvh w-auto flex flex-col justify-center items-center m-auto ${
        isMatch ? "bg-gradient-to-br from-gray-950 to-emerald-800" : ""
      }`}
    >
      {isMatch === null && <NameInput onNameMatch={setIsMatch} />}
      {isMatch === false && (
        <div className="flex flex-col justify-center items-center m-auto gap-4">
          <div className="text-2xl font-bold text-red-500">
            Opps! Wrong person.
          </div>
          <button
            onClick={handleReset}
            className=" font-bold px-5 py-2 bg-red-500 rounded-md"
          >
            restart
          </button>
        </div>
      )}
      {isMatch === true && <GiftBox />}
    </div>
  );
}
