import { Todos } from "@/types/type";
import React from "react";

const report = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/todos`,
    {
      cache: "no-cache",
    }
  );
  const { todos }: { todos: Todos[] } = await response.json();

  console.log(todos);

  return <div>안녕하세요?</div>;
};

export default report;
