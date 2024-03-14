"use client";

import { Todo } from "@/types/type";
import React from "react";

type TodoItems = {
  data: Todo;
  handleDeleteButtonClick: (id: string) => void;
  handleUpdateButtonClick: (id: string, isDone: boolean) => void;
};

export const TodoRender: React.FC<TodoItems> = ({
  data,
  handleDeleteButtonClick,
  handleUpdateButtonClick,
}) => {
  return (
    <div
      className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex-col space-x-4 size-60"
      key={data.id}
    >
      <button className="p-2" onClick={() => handleDeleteButtonClick(data.id)}>
        삭제
      </button>
      <h3 className="p-2 text-xl font-medium text-black">{data.title}</h3>
      <p className="p-2">{data.contents}</p>
      <button
        className={`${
          data.isDone
            ? `bg-red-500 hover:bg-red-600`
            : `bg-blue-600 hover:bg-blue-700`
        } text-white rounded-md p-2`}
        onClick={() => handleUpdateButtonClick(data.id, data.isDone)}
      >
        {data.isDone ? "Not Done" : " Done"}
      </button>
    </div>
  );
};
