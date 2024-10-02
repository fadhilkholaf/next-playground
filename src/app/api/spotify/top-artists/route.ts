"use server";

import { getTopArtists } from "@/lib/spotify";

export const GET = async () => {
  const response = await getTopArtists();

  if (response.status > 200) {
    return new Response(JSON.stringify({ success: false }), { status: 200 });
  }

  return new Response(
    JSON.stringify({ success: true, ...(await response.json()) }),
    { status: 200 }
  );
};
