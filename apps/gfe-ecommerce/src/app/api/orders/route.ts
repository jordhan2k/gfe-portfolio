import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // TODO: validate body (shipping info, cart, etc.)
  // const orderId = "order_" + uuidv4();
  const orderId = new Date().valueOf();
  const newOrder = {
    order_id: orderId, // Replace with DB insert
    ...body,
  };

  const response = NextResponse.json({ data: newOrder, success: true });
  response.cookies.set(`order_${orderId}`, `${orderId}`, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
