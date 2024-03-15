"use client";

import { Todo } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";

export const useTodoQuery = () => {
  return useQuery<Todo[]>({
    queryKey: [QUERY_KEYS.TODOLIST],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/api/todos`
      );
      const { todos }: { todos: Todo[] } = await response.json();

      return todos;
    },
  });
};
