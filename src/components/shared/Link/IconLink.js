import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconLink = styled(Link)`
  padding: 10px;
  line-height: 0 !important;
  border-radius: 5px;
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
  svg {
    width: 2rem;
    height: 2rem;
    padding: 0;
  }
`;
export default IconLink;
