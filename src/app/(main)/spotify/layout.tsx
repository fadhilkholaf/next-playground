"use server";

import { ReactNode } from "react";

const SpotifyBedroomLayout = ({ children }: { children: ReactNode }) => {
  return <main className="p-8">{children}</main>;
};

export default SpotifyBedroomLayout;
