import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import StatCard from './components/statcard/StatCard';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './App.module.css';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 600 },
  { name: 'Mar', users: 800 },
  { name: 'Apr', users: 1000 },
];

export default function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Navbar />
        <main className={styles.contentBody}>
          <div className={styles.statsGrid}>
            <StatCard title="Total Users" value="1,245" />
            <StatCard title="Revenue" value="$34,200" />
            <StatCard title="Active Now" value="312" />
          </div>
          
          {/* Simple Chart Section */}
          <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', height: '300px' }}>
            <h3>User Growth</h3>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
}