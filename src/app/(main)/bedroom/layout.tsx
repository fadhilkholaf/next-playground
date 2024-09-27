import { CursorFollowerProvider } from "@/components/providers/CursorFollowerProvider";
import { ReactNode } from "react";

const BedRoomLayout = ({ children }: { children: ReactNode }) => {
  return <CursorFollowerProvider>{children}</CursorFollowerProvider>;
};

export default BedRoomLayout;
