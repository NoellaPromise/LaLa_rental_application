import React from "react";
import { CirclePlus } from "lucide-react";

const page = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-center font-semibold text-[#DD7210] text-2xl">
        Todos app
      </h1>
      <div className="flex  justify-center gap-4 p-8 ">
        <input
          type="text"
          placeholder="Add Todos..."
          className="text-center  rounded-full text-gray-600"
        />
        <CirclePlus />
      </div>
    </div>
  );
};

export default page;
