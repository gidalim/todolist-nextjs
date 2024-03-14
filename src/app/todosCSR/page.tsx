"use client";

import TodoForm from "@/components/TodoForm/TodoForm";
import { TodoRender } from "@/components/TodoRender/TodoRender";
import { useDeleteTodo, useUpdateTodo } from "@/hooks/useTodoMutation";
import { useTodoQuery } from "@/hooks/useTodoQuery";
import { useRouter } from "next/navigation";
import React from "react";

const TodosCSR = () => {
  const router = useRouter();
  const { data = [], isLoading, isError } = useTodoQuery();
  const { updateTodo } = useUpdateTodo();
  const { deleteTodo } = useDeleteTodo();

  const mustTodo = data.filter((todos) => !todos.isDone);
  const doneTodo = data.filter((todos) => todos.isDone);

  const handleButtonClick = () => {
    router.push("/report");
  };

  const handleUpdateButtonClick = (id: string, isDone: boolean) => {
    if (!window.confirm("수정하시겠어요?")) {
      return;
    }
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  const handleDeleteButtonClick = (id: string) => {
    if (!window.confirm("삭제하시겠어요?")) {
      return;
    }
    deleteTodo(id);
  };

  if (isLoading) {
    return <div>무야호</div>;
  }

  if (isError) {
    return <>넌 나가라</>;
  }

  return (
    <div className="md:container md:mx-auto">
      <button onClick={handleButtonClick}>할 일 통계 보러가기</button>
      <TodoForm />
      <h2 className="text-2xl p-2">해야 할 일</h2>
      <section className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex space-x-4">
        {mustTodo.map((data) => {
          return (
            <TodoRender
              key={data.id}
              data={data}
              handleDeleteButtonClick={handleDeleteButtonClick}
              handleUpdateButtonClick={handleUpdateButtonClick}
            />
          );
        })}
      </section>
      <h2 className="text-2xl p-2">완료한 일</h2>
      <section className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex space-x-4">
        {doneTodo.map((data) => {
          return (
            <TodoRender
              key={data.id}
              data={data}
              handleDeleteButtonClick={handleDeleteButtonClick}
              handleUpdateButtonClick={handleUpdateButtonClick}
            />
          );
        })}
      </section>
    </div>
  );
};

export default TodosCSR;
