import React from 'react';
import { LayoutDashboard, Users, BarChart3, Settings } from 'lucide-react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>MyDashboard</div>
      <ul className={styles.menu}>
        <li><a href="#dashboard" className={`${styles.menuItem} ${styles.active}`}><LayoutDashboard size={20} /> Dashboard</a></li>
        <li><a href="#users" className={styles.menuItem}><Users size={20} /> Users</a></li>
        <li><a href="#analytics" className={styles.menuItem}><BarChart3 size={20} /> Analytics</a></li>
        <li><a href="#settings" className={styles.menuItem}><Settings size={20} /> Settings</a></li>
      </ul>
    </aside>
  );
}