"use server";

import { Prisma } from "../../../../prisma/generated/client";

import { prisma } from "@/lib/prisma";

export const createData = async (data: Prisma.DataCreateInput) => {
  try {
    await prisma.data.create({ data });
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
