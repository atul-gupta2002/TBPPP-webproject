// import React from 'react'
// import Sidebar from '../components/Sidebar'

// export default function Home() {
//   return (
//     <>
//     <div className='containers-fluid'>
//         <div className='row'>
//             <div className='col-lg-2 col-md-2 min-vh-100 shadow'>
//                 <Sidebar></Sidebar>
//             </div>

//             <div className='col-lg-10 col-md-10'>
//                 <h1>MainLayout</h1>
//             </div>

//         </div>

//     </div>
    
//     </>
    
//   )
// }


import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.sidebar}>
            <Sidebar />
          </div>

          <div style={styles.mainContent}>
            <h1 style={styles.heading}>Welcome to InscribeX</h1>
            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <h2>Overview</h2>
                <p>Check your activity, reports, and insights here.</p>
              </div>
              <div style={styles.card}>
                <h2>Notifications</h2>
                <p>View your latest alerts and messages.</p>
              </div>
              <div style={styles.card}>
                <h2>Settings</h2>
                <p>Manage your account settings and preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  sidebar: {
    flex: '0 0 20%',
    backgroundColor: '#2C3E50',
    padding: '20px',
    boxSizing: 'border-box',
    color: 'white',
  },
  mainContent: {
    flex: '1',
    backgroundColor: '#ffffff',
    padding: '30px',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '36px',
    color: '#2C3E50',
    marginBottom: '20px',
    fontWeight: '700',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: 'calc(33% - 20px)',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  cardHover: {
    transform: 'translateY(-10px)',
  },
};

