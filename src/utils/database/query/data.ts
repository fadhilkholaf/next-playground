"use server";

import { Prisma } from "../../../../prisma/generated/client";

import { prisma } from "@/lib/prisma";

export const findAllData = async () => {
  try {
    const response = await prisma.data.findMany();
    return { success: true, data: response };
  } catch (error) {
    return { success: false, data: null };
  }
};

export const createData = async (data: Prisma.DataCreateInput) => {
  try {
    const response = await prisma.data.create({ data });
    return { success: true, data: response };
  } catch (error) {
    return { success: false, data: null };
  }
};
