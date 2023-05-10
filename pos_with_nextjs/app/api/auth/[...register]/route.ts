import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  console.log(req.body);
  const body = req.body;
  return new Response(JSON.stringify({ body }), {
    status: 200,
    statusText: "This is GET Method",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("POST REQUEST", body);
  return new Response(JSON.stringify({ body }), {
    status: 200,
    statusText: "This is POST Method",
  });
}
