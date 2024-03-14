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
      className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex-col space-x-4 min-w-80 min-h-64 size-1/4"
      key={data.id}
    >
      <div className="flex justify-end">
        <button
          className="p-2 text-zinc-600 font-bold hover:text-red-600"
          onClick={() => handleDeleteButtonClick(data.id)}
        >
          삭제
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="p-2 text-xl font-medium text-black">{data.title}</h3>
        <p className="p-2 text-slate-500">{data.contents}</p>
      </div>
      <div className="flex justify-end m-4">
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
    </div>
  );
};
