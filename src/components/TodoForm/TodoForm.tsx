"use client";

import { useCreateTodo } from "@/hooks/useTodoMutation";
import { NewTodo } from "@/types/type";
import { useState } from "react";

const TodoForm = () => {
  const { addTodo } = useCreateTodo();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContents(value);
  };

  const handleCreateTodos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: NewTodo = {
      title,
      contents,
      isDone: false,
    };

    addTodo(newTodo);
    setTitle("");
    setContents("");
  };

  return (
    <div>
      <form onSubmit={handleCreateTodos}>
        <input
          value={title}
          placeholder="입력해주세요"
          onChange={handleChangeTitle}
          required
        />
        <input
          value={contents}
          placeholder="입력해주세요"
          onChange={handleChangeContent}
          required
        />
        <button className="px-4 py-2 bg-sky-600 rounded text-white hover:bg-sky-700">
          생성 버튼
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
