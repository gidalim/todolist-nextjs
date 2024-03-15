import { Todo } from "@/types/type";
import React from "react";

const report = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos`, {
    next: {
      revalidate: 10,
    },
  });
  const todos: Todo[] = await response.json();

  const totalTodoCounts = todos.length;
  const mustTodoCounts = todos.filter((todo) => todo.isDone === false).length;
  const DoneTodoCounts = totalTodoCounts - mustTodoCounts;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg absolute top-1/4 flex flex-col items-center justify-center gap-12 size-1/4 min-w-96">
        <ul className="text-2xl font-medium text-black">
          TodoList의 숫자 {totalTodoCounts}
        </ul>
        <ul className="text-2xl font-medium text-black">
          해야 할 일의 숫자 {mustTodoCounts}
        </ul>
        <ul className="text-2xl font-medium text-black">
          완료 한 일의 숫자 {DoneTodoCounts}
        </ul>
      </div>
    </div>
  );
};

export default report;
