import { darken } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 1.4rem;
  padding: 10px;
  & {
    color: ${(props) => props.theme.text};
  }
  & {
    text-decoration: none;
    ${(props) => props.theme.text};
  }
  &:link {
    color: ${(props) => props.theme.text};
  }
  &:hover {
    color: ${(props) => props.theme.text};
  }
  &:active {
    color: ${(props) => props.theme.text};
  }
  &:visited {
    color: ${(props) => props.theme.text};
  }

  &:hover {
    background: ${(props) => props.theme.highlight};
  }
`;
export default StyledLink;
