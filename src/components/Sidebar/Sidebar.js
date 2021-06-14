import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';

const StyledSidebar = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 110px;
  left: 20px;
  flex-direction: column;
  border-radius: 24px;
  gap: 30px;
  padding: 20px 50px;
  align-items: center;
  z-index: 200;
  background: ${(props) => props.theme.background};
  border: none;
  box-shadow: ${(props) => props.theme.shadowSoft};
`;

const SidebarOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
`;

const Sidebar = () => (
  <>
    <StyledSidebar
      initial={{ x: '-500px' }}
      animate={{ x: 0 }}
      exit={{ x: '-500px' }}
      whileHover={{ x: 0 }}
      transition={{ bounce: 0 }}
    >
      <Navigation vertical />
    </StyledSidebar>
    <SidebarOverlay
      initial={{ x: '-500px' }}
      animate={{ x: 0 }}
      exit={{ x: '-500px' }}
      whileHover={{ x: 0 }}
      transition={{ bounce: 0 }}
    />
  </>
);

export default Sidebar;
