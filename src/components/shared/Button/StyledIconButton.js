import styled from 'styled-components';
import StyledButton from './StyledButton';

const StyledIconButton = styled(StyledButton)`
  color: ${(props) => props.theme.text};
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.4rem;
  margin-left: ${(props) => (props.right ? 'auto' : null)};

  svg {
    width: ${(props) => (props.width ? props.width : '2rem')};
    height: ${(props) => (props.width ? props.width : '2rem')};
  }
  &:hover {
    background: ${(props) => props.theme.highlight};
  }
`;

export default StyledIconButton;
