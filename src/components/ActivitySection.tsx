"use client";

import styles from "./ActivitySection.module.css";

export default function ActivitySection() {
  // For now, we'll just have a placeholder section
  // Later we could add actual activity data
  
  return (
    <div className={styles.activitySection}>
      <h2 className={styles.sectionTitle}>Activity</h2>
      <div className={styles.emptyState}>
        No recent activity to show
      </div>
    </div>
  );
}