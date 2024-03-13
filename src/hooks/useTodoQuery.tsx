"use client";

import { Todos } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

export const useTodoQuery = () => {
  const { data, isLoading, isError } = useQuery<{ todos: Todos[] }>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}api/todos`
      );
      return await response.json();
    },
    initialData: { todos: [] },
  });
  return { data, isLoading, isError };
};
