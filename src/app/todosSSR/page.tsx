// SSR 렌더링 방식
// CUD 안 함
// Link태그를 통한 report페이지 이동 '할 일 정보 통계 보러가기' 페이지

import { Todos } from "@/types/type";
import Link from "next/link";
import React from "react";

const todosSSR = async () => {
  const response = await fetch("http://localhost:3000/api/todos");

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

export default todosSSR;
