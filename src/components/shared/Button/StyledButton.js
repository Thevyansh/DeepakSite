import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const StyledButton = styled(motion.button)`
  padding: 10px 20px;
  font-size: 1.4rem;
  outline: none;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  background: ${(p) => (p.secondary ? p.theme.elevation1 : 'none')};
  box-shadow: ${(p) => (p.secondary ? p.theme.shadowSoft : 'none')};
  display: inline-flex;
`;

export default StyledButton;
