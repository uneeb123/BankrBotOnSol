"use client";

import { usePrivy } from "@privy-io/react-auth";
import styles from "./ProfileModal.module.css";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { user, logout } = usePrivy();

  // Find the Twitter account from linked accounts
  const twitterAccount = user?.linkedAccounts?.find(
    (account) => account.type === "twitter_oauth"
  );

  // Get Twitter username if available
  const twitterUsername = twitterAccount?.username || "Unknown";

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.accountInfo}>
          <p className={styles.accountTitle}>
            You are logged in with your X account
          </p>
          <p className={styles.twitterUsername}>@{twitterUsername}</p>
          <button className={styles.logoutButton} onClick={logout}>
            Log Out <span className={styles.logoutIcon}>↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
