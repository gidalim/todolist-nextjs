"use client";

import { useCreateTodo } from "@/hooks/useTodoMutation";
import React, { useState } from "react";

const TodoForm = () => {
  const { addTodo } = useCreateTodo();
  const [title, setTitle] = useState("");

  return <div>TodoForm</div>;
};

export default TodoForm;
