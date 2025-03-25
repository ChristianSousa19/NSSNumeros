import React, { useContext } from 'react';
import { SidebarContext } from '../../../context/SidebarContext';

import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? '240px' : '0')};
  height: 100vh;
  background-color: #2c3e50;
  overflow: hidden;
  transition: width 0.3s ease;
`;

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <>
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? 'Fechar Sidebar' : 'Abrir Sidebar'}
      </button>
      <SidebarContainer isOpen={isSidebarOpen}>
        <p>Opção 1</p>
        <p>Opção 2</p>
        <p>Opção 3</p>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
