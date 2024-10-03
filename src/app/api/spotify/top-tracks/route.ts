"use server";

import { getTopTracks } from "@/lib/spotify";

export const GET = async () => {
  const response = await getTopTracks();

  if (response.status > 200) {
    return new Response(JSON.stringify({ success: false, response }), {
      status: 200,
    });
  }

  return new Response(
    JSON.stringify({ success: true, ...(await response.json()) }),
    { status: 200 }
  );
};
