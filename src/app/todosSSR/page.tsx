import { Todos } from "@/types/type";
import Link from "next/link";
import React from "react";
export const dynamic = "force-dynamic";

const TodosSSR = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}api/todos`, {
    cache: "no-cache",
  });

  const { todos } = await response.json();

  return (
    <>
      <Link href={"/report"}>할 일 통계 보러가기</Link>
      <div>
        {todos.map((data: Todos) => {
          return (
            <div key={data.id}>
              <h2>{data.title}</h2>
              <p>{data.contents}</p>
              {data.isDone ? <p>Done</p> : <p>Not Done</p>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodosSSR;
