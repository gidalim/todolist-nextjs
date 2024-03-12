export async function GET(request: Request) {
  const response = await fetch("http://localhost:4000/companyInfo", {
    cache: "force-cache",
  });
  const company = await response.json();

  if (!company) {
    return new Response("정보가 존재하지 않습니다", {
      status: 404,
    });
  }

  return Response.json({ company });
}
