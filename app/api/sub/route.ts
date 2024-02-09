export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const newCount = parseInt(searchParams.get("count")) - 1;

  return Response.json({ count: newCount });
}
