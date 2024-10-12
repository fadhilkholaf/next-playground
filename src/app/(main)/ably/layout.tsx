"use client";

import { ReactNode } from "react";

import { Realtime } from "ably";
import {
  AblyProvider,
  ChannelProvider,
  useConnectionStateListener,
} from "ably/react";
import Link from "next/link";

const AblyLayout = ({ children }: { children: ReactNode }) => {
  const client = new Realtime({ key: process.env.NEXT_PUBLIC_ABLY_API_KEY });

  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName="fadhilkholaf">
        <ConnectionMessage />
        <div className="pt-20">
          <Link href="/ably/cursor">Cursor</Link>
        </div>
        <div className="bg-red-500 w-screen h-screen">{children}</div>
      </ChannelProvider>
    </AblyProvider>
  );
};

const ConnectionMessage = () => {
  useConnectionStateListener("connected", (e) => {
    console.log("connected /ably");
  });

  useConnectionStateListener("failed", (e) => {
    console.log("failed connecting /ably");
  });

  return null;
};

export default AblyLayout;
