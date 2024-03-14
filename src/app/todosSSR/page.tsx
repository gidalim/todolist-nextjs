import { Todo } from "@/types/type";
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
  const { todos }: { todos: Todo[] } = await response.json();

  const mustTodo = todos.filter((todos) => !todos.isDone);
  const doneTodo = todos.filter((todos) => todos.isDone);

  return (
    <>
      <Link href={"/report"} className="text-xl m-8">
        할 일 통계 보러가기
      </Link>
      <h2 className="text-2xl m-8 p-2">해야 할 일</h2>
      <section className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex space-x-4">
        {mustTodo.map((data) => {
          return (
            <div key={data.id} className="p-6">
              <h3 className="p-2 text-xl font-medium text-black">
                {data.title}
              </h3>
              <p className="p-2 text-slate-500">{data.contents}</p>
              <span
                className={`${
                  data.isDone ? `bg-blue-600` : `bg-red-500`
                } rounded-md p-2`}
              >
                {data.isDone ? "Not Done" : "Done"}
              </span>
            </div>
          );
        })}
      </section>
      <h2 className="text-2xl m-8 p-2">완료한 일</h2>
      <section className="flex flex-wrap p-6">
        {doneTodo.map((data) => {
          return (
            <div key={data.id} className="p-8">
              <h3 className="p-2">{data.title}</h3>
              <p className="p-2">{data.contents}</p>
              <span
                className={`${
                  data.isDone ? `bg-blue-600` : `bg-red-500`
                } rounded-md p-2`}
              >
                {data.isDone ? "Not Done" : "Done"}
              </span>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TodosSSR;
