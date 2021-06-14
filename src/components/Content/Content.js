import React from 'react';
import styled from 'styled-components';
import PostList from '../PostList/PostList';

const StyledGrid = styled.div`
  margin: 15px;
`;
const Content = () => (
  <StyledGrid container>
    <PostList />
  </StyledGrid>
);

export default Content;
