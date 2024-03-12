export async function GET(request: Request) {
  const response = await fetch("http://localhost:4000/todos");
  const todos = await response.json();

  if (!todos) {
    return new Response("현재 해야 할 일이 존재하지 않아요!", {
      status: 404,
    });
  }
  return Response.json({
    todos: [...todos],
  });
}

export async function POST(request: Request) {
  const { title, contents } = await request.json();

  const response = await fetch(`http://localhost:4000/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, contents, isDone: false }),
  });
  const todo = await response.json();

  return Response.json(`생성 완료 : ${todo.id}`);
}

export async function PATCH(request: Request) {
  const { id, isDone } = await request.json();

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone: !isDone }),
  });
  const todo = await response.json();

  return Response.json(`갱신 완료 : ${todo.id}`);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE",
  });
  const todo = await response.json();

  return Response.json(`삭제 완료 : ${todo.id}`);
}
