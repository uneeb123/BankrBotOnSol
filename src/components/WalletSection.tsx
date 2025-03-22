"use client";

import { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useSolanaWallets } from "@privy-io/react-auth/solana";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import styles from "../app/page.module.css";
import Image from "next/image";
import { FiCopy } from "react-icons/fi";

export default function WalletSection() {
  const { user } = usePrivy();
  const { wallets: privySolanaWallets } = useSolanaWallets();
  const [solanaAddress, setSolanaAddress] = useState<string | null>(null);
  const [solBalance, setSolBalance] = useState<number | null>(null);
  const [solValue, setSolValue] = useState<string>("--");
  const [isLoading, setIsLoading] = useState(true);

  // Get the Privy-generated Solana wallet address
  useEffect(() => {
    const getSolanaWallet = async () => {
      if (user) {
        try {
          // Check if user has any Solana wallets through Privy
          if (privySolanaWallets && privySolanaWallets.length > 0) {
            const solanaWallet = privySolanaWallets[0];
            console.log("Found Privy Solana wallet:", solanaWallet);
            setSolanaAddress(solanaWallet.address);
          } else {
            console.log(
              "No Privy Solana wallet found, checking linked accounts..."
            );
          }
        } catch (error) {
          console.error("Error getting Solana wallet:", error);
          setIsLoading(false);
        }
      }
    };

    getSolanaWallet();
  }, [user, privySolanaWallets]);

  // Fetch SOL balance when we have an address
  useEffect(() => {
    const fetchSolBalance = async () => {
      if (solanaAddress) {
        try {
          if (!solanaAddress) return;

          // Use Helius RPC endpoint with API key from .env
          const heliusApiKey = process.env.NEXT_PUBLIC_HELIUS_API_KEY;
          const connection = new Connection(
            `https://mainnet.helius-rpc.com/?api-key=${heliusApiKey}`,
            "confirmed"
          );

          const pubKey = new PublicKey(solanaAddress);
          const balance = await connection.getBalance(pubKey);
          const solAmount = balance / LAMPORTS_PER_SOL;

          setSolBalance(solAmount);

          // Estimate USD value (simplified - in a real app you'd fetch the current price)
          const estimatedSolPrice = 20; // Placeholder SOL price in USD
          const usdValue = solAmount * estimatedSolPrice;
          setSolValue(`$${usdValue.toFixed(2)}`);
        } catch (error) {
          console.error("Error fetching SOL balance:", error);
          // Set fallback values instead of showing the error
          setSolBalance(0);
          setSolValue("$0.00");
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchSolBalance();
  }, [solanaAddress]);

  return (
    <div className={styles.walletSection}>
      <h2 className={styles.walletTitle}>Wallet</h2>
      <div className={styles.walletInfo}>
        <div className={styles.walletProvider}>
          <div className={styles.baseIcon}>
            <Image
              src="/solanaLogoMark.svg"
              alt="Solana Logo"
              width={14}
              height={14}
            />
          </div>{" "}
          Solana
          <span className={styles.walletBalance}>
            {isLoading ? "Loading..." : ""}
          </span>
        </div>
        <div className={styles.tradingWallet}>
          Wallet Address:
          <span className={styles.walletAddress}>
            {solanaAddress
              ? `${solanaAddress.slice(0, 4)}...${solanaAddress.slice(-6)}`
              : isLoading
              ? "Loading..."
              : "Not found"}
          </span>
          <button
            className={styles.copyBtn}
            onClick={() => {
              if (solanaAddress) {
                navigator.clipboard.writeText(solanaAddress);
                alert("Address copied to clipboard!");
              }
            }}
            disabled={!solanaAddress}
          >
            <FiCopy />
          </button>
        </div>
        <div className={styles.ethBalance}>
          <span className={styles.ethIcon}>SOL:</span>
          <span className={styles.ethAmount}>
            {isLoading
              ? "Loading..."
              : solBalance !== null
              ? solBalance.toFixed(4)
              : "--"}
          </span>
          <span className={styles.ethValue}>{isLoading ? "" : solValue}</span>
        </div>
      </div>
    </div>
  );
}
