"use client";

import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import styles from "./page.module.css";
import SignIn from "../components/SignIn";
import ProfileModal from "../components/ProfileModal";
import WalletSection from "../components/WalletSection";
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

      <main className={styles.main}>
        <div className={styles.activitySection}>
          <h2 className={styles.sectionTitle}>Activity</h2>
          <div className={styles.transaction}>
            <div className={styles.transactionDetails}>
              <span className={styles.arrow}>▶</span>
              Transfer TOBY to
              <div className={styles.address}>
                0x4e902e01d78300b0ba876562e99e66e929715e
              </div>
            </div>
            <button className={styles.checkBtn}>✓</button>
          </div>
        </div>

        <div className={styles.chatSection}>
          <div className={styles.chatArea}>
            <div className={styles.chatPlaceholder}>
              {/* Welcome! What do you want to do? */}
            </div>
          </div>
          <div className={styles.messageCounter}>
            0 / 10 free daily messages used
            <div className={styles.usageBar}>
              <div className={styles.usageProgress} style={{ width: "0%" }}>
                0.00%
              </div>
            </div>
          </div>
          <div className={styles.chatFooter}>
            Enjoy Bankr without limits
            <button className={styles.joinClubBtn}>Join Bankr Club</button>
          </div>
        </div>

        <WalletSection />
      </main>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
}
