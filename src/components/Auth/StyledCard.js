import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;
  max-width: 600px;
  align-items: center;
  border-radius: 15px;
  background: ${(p) => p.theme.background};
  box-shadow: ${(p) => p.theme.shadowSoft};
  form {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  label,
  h2,
  button {
    margin-top: 2rem;
  }
  button {
    width: fit-content;
    align-self: center;
    margin-bottom: 2rem;
  }
  button:disabled {
    cursor: not-allowed;
  }
`;
