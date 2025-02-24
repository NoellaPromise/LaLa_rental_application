import React from "react";

import TodoList from "@/app/components/TodoList";

const page = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-[#DD7210] text-2xl p-4">
        Todos app
      </h1>
      <TodoList />
    </div>
  );
};

export default page;
