import { Todos } from "@/types/type";
import Link from "next/link";
import React from "react";
export const dynamic = "force-dynamic";

const TodosSSR = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/todos`,
    {
      cache: "no-cache",
    }
  );
  const { todos }: { todos: Todos[] } = await response.json();

  const mustTodo = todos.filter((todos) => !todos.isDone);
  const doneTodo = todos.filter((todos) => todos.isDone);

  return (
    <>
      <Link href={"/report"}>할 일 통계 보러가기</Link>
      <section>
        <h2>해야 할 일</h2>
        {mustTodo.map((data) => {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
              <p>{data.contents}</p>
              {data.isDone ? "Not Done" : "Done"}
            </div>
          );
        })}
      </section>
      <section>
        <h2>완료한 일</h2>
        {doneTodo.map((data) => {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
              <p>{data.contents}</p>
              {data.isDone ? "Not Done" : "Done"}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TodosSSR;
