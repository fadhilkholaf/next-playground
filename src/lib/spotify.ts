"use server";

export const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID!}:${process.env
          .SPOTIFY_CLIENT_SECRET!}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
    next: { revalidate: 3600 },
  });

  return await response.json();
};

export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken();

  return await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });
};

export const getTopArtists = async () => {
  const { access_token } = await getAccessToken();

  return await fetch("https://api.spotify.com/v1/me/top/artists?limit=5", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-store",
  });
};
