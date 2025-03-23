"use client";

import { ReactNode, useState } from "react";
import styles from "./TabLayout.module.css";

type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

export default function TabLayout({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={styles.tabLayout}>
      <div className={styles.tabContent}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tabPane} ${
              activeTab === tab.id ? styles.activeTabPane : ""
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>

      <div className={styles.tabBar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${
              activeTab === tab.id ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}