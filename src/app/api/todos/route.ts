// todos route

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
