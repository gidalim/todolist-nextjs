export async function PATCH(
  request: Request,
  { params }: { params: { todoId: string } }
) {
  const { isDone } = await request.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/${params.todoId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone }),
    }
  );
  const todo = await response.json();

  return Response.json(`갱신 완료 : ${todo.todoId}`);
}

export async function DELETE(
  request: Request,
  { params }: { params: { todoId: string } }
) {
  const response = await fetch(`http://localhost:4000/todos/${params.todoId}`, {
    method: "DELETE",
  });
  const todo = await response.json();

  return Response.json(`삭제 완료 : ${todo.todoId}`);
}
