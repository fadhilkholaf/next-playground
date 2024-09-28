"use server";

import { createData } from "@/utils/database/query/data";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {

  // await createData({data:await})

  return Response.json({ title: "This is a testing", data: await req.json() });
};
