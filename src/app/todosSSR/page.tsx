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
    <div className="md:container md:mx-auto flex flex-col gap-8">
      <Link href={"/report"} className="text-xl font-bold mt-8 text-center">
        할 일 통계 보러가기
      </Link>
      <h2 className="text-2xl mt-8 p-2">해야 할 일</h2>
      <section className="position: relative flex flex-wrap gap-4">
        {mustTodo.map((data) => {
          return (
            <div
              key={data.id}
              className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex-col space-x-4 size-60"
            >
              <h3 className="p-2 text-xl font-medium text-black">
                {data.title}
              </h3>
              <p className="p-2 text-slate-500">{data.contents}</p>
              <span className="cursor-default bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2">
                {data.isDone ? "Not Done" : "Done"}
              </span>
            </div>
          );
        })}
      </section>
      <h2 className="text-2xl mt-8 p-2">완료한 일</h2>
      <section className="position: relative flex flex-wrap gap-4">
        {doneTodo.map((data) => {
          return (
            <div
              key={data.id}
              className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex-col space-x-4 size-60"
            >
              <h3 className="p-2 text-xl font-medium text-black">
                {data.title}
              </h3>
              <p className="p-2 text-slate-500">{data.contents}</p>
              <span className="cursor-default bg-red-500 hover:bg-red-600 text-white rounded-md p-2">
                {data.isDone ? "Not Done" : "Done"}
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default TodosSSR;
