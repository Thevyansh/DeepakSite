import React from 'react';
import styled from 'styled-components';
import FeaturedImage from './FeaturedImage/FeaturedImage';
import Categories from './Categories/Categories';
import Tags from './Tags/Tags';
import Title from './Title/Title';
import Edit from '../../../../pages/Edit/Edit';

const StyledEditing = styled.div`
  display: flex;
  background: ${(props) => props.theme.background};
  padding: 5rem;
  border-radius: 24px;
  max-width: 1600px;
  margin: 0 auto;
  gap: 5rem;
  flex-wrap: wrap;
  ${(p) => p.theme.elevation1}
`;
const StyledOptions = styled.div`
  flex: 1 1 300px;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  h3 {
    margin-bottom: 10px;
  }
  @media (max-width: 1190px) {
    max-width: initial;
  }
`;

const PostEditor = () => (
  <StyledEditing>
    <Title />
    <Edit />
    <StyledOptions>
      <FeaturedImage />
      <Categories />
      <Tags />
    </StyledOptions>
  </StyledEditing>
);

export default PostEditor;
