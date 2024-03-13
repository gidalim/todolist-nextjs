"use client";

import { Todo } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

export const useTodoQuery = () => {
  return useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}api/todos`
      );
      const { todos }: { todos: Todo[] } = await response.json();

      return todos;
    },
  });
};
