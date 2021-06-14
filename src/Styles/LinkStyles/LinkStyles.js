import { rgba } from 'polished';
import { css } from 'styled-components';

const LinkStyles = css`
  color: ${(props) => props.theme.link};
  transition: all 0.3s ease;
  text-decoration: none;
  text-decoration: underline;
  text-decoration-color: ${(props) => rgba(props.theme.link, 0.5)};
  text-decoration-thickness: 0.125em;
  text-underline-offset: 1.5px;
  &:hover {
    text-decoration-color: ${(props) => props.theme.link};
  }
  &:focus {
    text-decoration-color: ${(props) => props.theme.link};
  }
`;

export default LinkStyles;
