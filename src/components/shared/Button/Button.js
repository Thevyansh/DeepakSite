import styled from 'styled-components';

const Button = styled.button.attrs(() => ({
  type: 'button',
}))`
  outline: none;
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  background: none;
`;

export default Button;
