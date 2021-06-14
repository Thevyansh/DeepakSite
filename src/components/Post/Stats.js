import React from 'react';
import styled from 'styled-components';
import StyledIconButton from '../shared/Button/StyledIconButton';
import {
  like,
  save,
  share,
  unlike,
  remove,
  comment,
} from '../shared/Icons/Icons';

const StyledStats = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;

  ${StyledIconButton} {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  span {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.text};
  }
`;
const Stats = () => (
  <StyledStats>
    <StyledIconButton width="2rem" height="2rem" padding="0">
      <span>{unlike}</span>
      <span>2.1k</span>
    </StyledIconButton>
    <StyledIconButton width="2rem" height="2rem" padding="0">
      <span>{comment}</span>
      <span>234</span>
    </StyledIconButton>
    <StyledIconButton width="2rem" height="2rem" padding="0" right>
      <span>{save}</span>
    </StyledIconButton>
  </StyledStats>
);

export default Stats;
