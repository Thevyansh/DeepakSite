import styled from 'styled-components';
import StyledButton from '../../shared/Button/StyledButton';

export const StyledEditorContainer = styled.div`
  margin: 20px;
  ${StyledButton} {
    box-shadow: ${(props) => props.theme.shadowSoft};
  }
`;

export const StyledHeader = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 3rem;
  gap: 2rem;
`;
