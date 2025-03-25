import React from 'react';
import Sidebar from './components/Drawer/SideBar/SideBar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Conteúdo Principal</h1>
      </div>
    </div>
  );
}

export default App;
