"use client";

import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import styles from "./page.module.css";
import SignIn from "../components/SignIn";
import ProfileModal from "../components/ProfileModal";
import WalletSection from "../components/WalletSection";
import ActivitySection from "../components/ActivitySection";
import ChatSection from "../components/ChatSection";
import TabLayout from "../components/TabLayout";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  const { ready, authenticated } = usePrivy();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // If not ready yet, could show a loading state
  if (!ready) {
    return <div>Loading...</div>;
  }

  // If not signed in, show the sign-in page
  if (!authenticated) {
    return <SignIn />;
  }

  // Define tabs for mobile layout
  const tabs = [
    {
      id: "wallet",
      label: "Wallet",
      content: <WalletSection />
    },
    {
      id: "chat",
      label: "Chat",
      content: <ChatSection />
    },
    {
      id: "activity",
      label: "Activity",
      content: <ActivitySection />
    }
  ];

  // Otherwise, show the dashboard
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.logo}>BANKR ON SOL</h1>
        </div>
        <div className={styles.headerRight}>
          <WalletMultiButton className={styles.walletModeBtn} />
          <button
            className={styles.profileBtn}
            onClick={() => setIsProfileModalOpen(true)}
          >
            👤
          </button>
        </div>
      </header>

      <div className={styles.disclaimer}>
        Bankr On SOL is currently in alpha and may occasionally make mistakes.
        Use at your own risk. At this stage, Bankr supports only Solana.
      </div>

      {/* Desktop layout */}
      <main className={styles.desktopMain}>
        <WalletSection />
        <ChatSection />
        <ActivitySection />
      </main>

      {/* Mobile layout with tabs */}
      <div className={styles.mobileMain}>
        <TabLayout tabs={tabs} />
      </div>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
}