import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUser, signout } from '../../store/auth';
import { toggleGlass } from '../../store/ui/glass';
import { toggleTheme } from '../../store/ui/theme';
import StyledIconButton from '../shared/Button/StyledIconButton';
import { darkMode } from '../shared/Icons/Icons';
import StyledLink from '../shared/Link/StyledLink';

const StyledNavigation = styled(motion.div)`
  flex: 0 1 auto;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-direction: ${(p) => (p.vertical ? 'column' : 'row')};
`;
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.2 } },
  exit: { opacity: 0 },
};
const Navigation = ({ vertical }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <StyledNavigation
      variants={item}
      initial="hidden"
      animate="show"
      exit="exit"
      vertical={vertical}
    >
      <StyledLink to="/shorts">
        <span>Shorts</span>
      </StyledLink>

      {user && (
        <>
          <StyledLink to="/admin">
            <span>Admin</span>
          </StyledLink>
          <StyledIconButton type="button" onClick={() => dispatch(signout())}>
            <span>Log Out</span>
          </StyledIconButton>
        </>
      )}
      {/* <StyledIconButton type="button" onClick={() => dispatch(toggleGlass())}>
        <span>Glass</span>
      </StyledIconButton> */}
      <StyledIconButton type="button" onClick={() => dispatch(toggleTheme())}>
        <span>{darkMode}</span>
      </StyledIconButton>
    </StyledNavigation>
  );
};

export default Navigation;
