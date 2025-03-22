import { usePrivy } from "@privy-io/react-auth";
import { useSolanaWallets } from "@privy-io/react-auth/solana";
import styles from "./SignIn.module.css";
import { useEffect } from "react";

export default function SignIn() {
  const { 
    login, 
    ready, 
    user,
    authenticated
  } = usePrivy();
  
  const { createWallet } = useSolanaWallets({
    onSuccess: ({ wallet }) => {
      console.log("Solana wallet created successfully:", wallet);
    },
    onError: (error) => {
      console.error("Error creating Solana wallet:", error);
    }
  });

  // Check if we need to create a Solana wallet after login
  useEffect(() => {
    const createSolanaWalletIfNeeded = async () => {
      if (authenticated && user) {
        try {
          // Check if user already has a Solana wallet
          const hasSolanaWallet = user.linkedAccounts.some(
            account => account.type === "wallet" && account.walletClientType === "solana"
          );
          
          // If not, create one
          if (!hasSolanaWallet) {
            console.log("Creating Solana wallet...");
            await createWallet();
          }
        } catch (error) {
          console.error("Error checking Solana wallet:", error);
        }
      }
    };
    
    createSolanaWalletIfNeeded();
  }, [authenticated, user, createWallet]);
  
  // Handler for Twitter login with pre-generated Solana wallet
  const handleSignInWithTwitter = async () => {
    if (ready) {
      try {
        // Login specifically with Twitter
        await login({
          provider: "twitter",
        });
      } catch (error) {
        console.error("Error signing in with Twitter:", error);
      }
    }
  };

  return (
    <div className={styles.signInContainer}>
      <header className={styles.header}>
        <h1 className={styles.logo}>BANKR ON SOL</h1>
      </header>

      <div className={styles.disclaimer}>
        Bankr On SOL is currently in alpha and may occasionally make mistakes.
        Use at your own risk. At this stage, Bankr ON SOL supports only Solana.
      </div>

      <main className={styles.main}>
        <div className={styles.signInBox}>
          <button
            className={styles.signInButton}
            onClick={handleSignInWithTwitter}
            disabled={!ready}
          >
            Sign in with Twitter
          </button>
          <p className={styles.signInInfo}>
            A Solana wallet will be automatically created for you
          </p>
        </div>
      </main>
    </div>
  );
}
