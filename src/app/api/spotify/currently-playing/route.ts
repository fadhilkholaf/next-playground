"use server";

import { getCurrentlyPlaying } from "@/lib/spotify";

export const GET = async () => {
  const response = await getCurrentlyPlaying();

  if (response.status > 200) {
    return new Response(JSON.stringify({ is_playing: false }), { status: 200 });
  }

  return new Response(JSON.stringify(await response.json()), { status: 200 });
};
