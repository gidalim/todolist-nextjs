"use client";

import { NewTodo, UpdateTodo } from "@/types/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "./keys.constant";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async (newTodo: NewTodo) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/api/todos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        }
      );
      return await response.json();
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TODOLIST],
      });
    },
  });
  return { addTodo: mutate };
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/todos/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TODOLIST],
      });
    },
  });
  return { deleteTodo: mutate };
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (updateTodo: UpdateTodo) => {
      const { id, isDone } = updateTodo;
      await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone }),
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TODOLIST],
      });
    },
  });

  return { updateTodo: mutate };
};
