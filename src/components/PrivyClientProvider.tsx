"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { privyAppId } from "../lib/privy";

export default function PrivyClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        loginMethods: ["twitter"],
        appearance: {
          theme: "dark",
          accentColor: "#000000",
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
