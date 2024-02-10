// export default (req, res) => {
//   const { count } = req.query;
//   // Use the count value as needed, for example, add it to a fixed value
//   const result = parseInt(count, 10) + 42;
//   res.json({ result });
// };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const newCount = parseInt(searchParams.get("count")!) + 1;

  return Response.json({ count: newCount });
}
