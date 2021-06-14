/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import Logo from '../shared/Logo/Logo';
import Sidebar from '../Sidebar/Sidebar';
import MenuButton from './MenuButton';
import Navigation from '../Navigation/Navigation';

const StyledHeader = styled(motion.div)`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  z-index: 45;
  align-items: center;
  margin: 20px;
  padding: 10px 20px;
  background: ${(props) => props.theme.background};
  width: 250px;
  transition: width 200ms;
  will-change: width;
  &[data-isexpanded='true'] {
    width: calc(100% - 40px);
  }
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadowSoft};
`;

const StyledBrand = styled(Link)`
  flex: 1 1 50px;
  h1 {
    width: min-content;
    margin: 0;
  }
`;

const StyledNavigation = styled(motion.div)`
  flex: 0 1 auto;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.2 } },
  exit: { opacity: 0 },
};
const Header = ({ toggleTheme }) => {
  const [show, setShow] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        setShow(false);
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <StyledHeader
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      data-isexpanded={isExpanded}
      transition={{ type: 'spring', bounce: 0 }}
      onHoverStart={() => setShowSidebar(true)}
      onHoverEnd={() => setShowSidebar(false)}
    >
      <MenuButton
        isOpen={show}
        isExpanded={isExpanded}
        showSidebar={showSidebar}
        setShow={setShow}
        setIsExpanded={setIsExpanded}
      />
      <StyledBrand to="/">
        <Logo />
      </StyledBrand>
      <AnimatePresence onExitComplete={() => setIsExpanded(false)}>
        {show && <Navigation />}
      </AnimatePresence>
      <AnimatePresence>
        {!isExpanded && showSidebar && (
          <Sidebar show={showSidebar} setShow={setShowSidebar} />
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;
