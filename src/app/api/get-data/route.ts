"use server";

import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  return Response.json({ title: "This is a testing", data: await req.json() });
};
