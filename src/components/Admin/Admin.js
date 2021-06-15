import { motion } from 'framer-motion';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import CreatePost from './Post/CreatePost';

const StyledAdminCard = styled.div`
  position: relative;
  border-radius: 15px;
  ${(p) => p.theme.elevation1};

  &:hover {
    ${(p) => p.theme.elevation3};
  }
  a {
    display: block;
    font-size: 2rem;
    padding: 80px;
    color: ${(p) => p.theme.text};
  }
`;

const LinkList = styled.div`
  margin: 2rem;
  display: flex;
  gap: 2rem;
`;
const Admin = () => (
  <LinkList>
    <StyledAdminCard>
      <Link to="/createPost">Create Post</Link>
    </StyledAdminCard>
    <StyledAdminCard>
      <Link to="/createShort">Create Short</Link>
    </StyledAdminCard>
  </LinkList>
);

export default Admin;
