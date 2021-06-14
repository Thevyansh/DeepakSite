import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import StyledIconButton from '../shared/Button/StyledIconButton';
import {
  hamburgerMenu,
  doubleChevronLeft,
  doubleChevronRight,
} from '../shared/Icons/Icons';

const animationVarient = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
const StyledMenuButton = styled(StyledIconButton)`
  position: relative;
  padding: 25px;
  z-index: 50;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const MenuButton = ({ isOpen, isExpanded, setShow, setIsExpanded }) => {
  const [icon, setIcon] = useState('hamburgerMenu');
  const handleHover = () => {
    if (isExpanded) {
      setIcon('doubleChevronLeft');
    } else {
      setIcon('doubleChevronRight');
    }
  };
  const handleSidebar = () => {
    setShow(!isOpen);
    setIsExpanded(true);
    if (isExpanded) {
      setIcon('doubleChevronRight');
    } else {
      setIcon('doubleChevronLeft');
    }
  };
  return (
    <StyledMenuButton
      type="button"
      transparent
      onClick={handleSidebar}
      onHoverStart={handleHover}
      onHoverEnd={() => setIcon('hamburgerMenu')}
      width="1.5rem"
      height="1.5rem"
    >
      <AnimatePresence>
        {icon === 'hamburgerMenu' ? (
          <motion.span
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVarient}
          >
            {hamburgerMenu}
          </motion.span>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {icon === 'doubleChevronLeft' ? (
          <motion.span
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVarient}
          >
            {doubleChevronLeft}
          </motion.span>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {icon === 'doubleChevronRight' ? (
          <motion.span
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVarient}
          >
            {doubleChevronRight}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </StyledMenuButton>
  );
};

export default MenuButton;
