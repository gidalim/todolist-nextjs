"use client";

import { useQuery } from "@tanstack/react-query";

export const useQueryTodo = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}api/todos`
      );
      const { todos } = await response.json();

      return todos;
    },
  });

  return { data, isLoading, isError };
};
