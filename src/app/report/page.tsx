import { Todo } from "@/types/type";
import React from "react";

const report = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/todos`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const { todos }: { todos: Todo[] } = await response.json();

  const totalTodoCounts = todos.length;
  const mustTodoCounts = todos.filter((todo) => todo.isDone === false).length;
  const DoneTodoCounts = totalTodoCounts - mustTodoCounts;

  return (
    <div>
      <div>
        <ul>현재 존재하는 TodoList의 숫자는 {totalTodoCounts}</ul>
        <ul>현재 존재하는 해야 할 일의 숫자는 {mustTodoCounts} </ul>
        <ul>현재 존재하는 완료 한 일의 숫자는 {DoneTodoCounts} </ul>
      </div>
    </div>
  );
};

export default report;
