import React from 'react';
import { FaHome, FaSearch, FaUserAlt, FaStickyNote } from 'react-icons/fa'; // Updated with FaStickyNote for notes icon

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>NotesApp</h1>
      </div>
      <div style={styles.menuItems}>
        <div style={styles.menuItem}>
          <FaHome style={styles.icon} />
          <span style={styles.text}>Home</span>
        </div>
        <div style={styles.menuItem}>
          <FaSearch style={styles.icon} />
          <span style={styles.text}>Search</span>
        </div>
        <div style={styles.menuItem}>
          <FaUserAlt style={styles.icon} />
          <span style={styles.text}>Profile</span>
        </div>
        <div style={styles.menuItem}>
          <FaStickyNote style={styles.icon} />
          <span style={styles.text}>My Notes</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    background: 'linear-gradient(135deg, #6a11cb, #2575fc)', 
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '4px 0px 15px rgba(0, 0, 0, 0.1)', 
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px', 
  },
  logo: {
    fontSize: '28px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: 'white',
  },
  menuItems: {
    display: 'flex',
    flexDirection: 'column',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0', 
    cursor: 'pointer',
    transition: '0.3s',
    padding: '10px',
    borderRadius: '8px', 
  menuItemHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
  },
  icon: {
    fontSize: '22px',
    marginRight: '50px',
    
  },
  text: {
    fontSize: '10px',
    fontWeight: '500',
    padding: '10px',
  },
}
};


