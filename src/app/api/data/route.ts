"use server";

import { NextRequest } from "next/server";

import { createData, findAllData } from "@/utils/database/query/data";

export const GET = async () => {
  const response = await findAllData();

  return Response.json(response);
};

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const response = await createData({ data });

  return Response.json(response);
};
