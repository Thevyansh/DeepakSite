import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { animated } from 'react-spring';
import { formatDistanceToNow } from 'date-fns';
import { useSelector } from 'react-redux';
import StyledLink from '../shared/Link/StyledLink';

import { edit } from '../shared/Icons/Icons';
import IconLink from '../shared/Link/IconLink';
import { selectUser } from '../../store/auth';

const StyledPost = styled(animated.div)`
  padding: 15px;
  border-radius: 24px;
  position: relative;
  z-index: 0;
  width: calc(
    100% / var(--grid-items-per-row) - var(--grid-item-margin) - 0.01px
  );
  margin-left: calc(var(--grid-item-margin) / 2);
  margin-right: calc(var(--grid-item-margin) / 2);
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  ${(p) => p.theme.elevation2}
`;
const StyledCardHeader = styled.div`
  margin-bottom: auto;
  color: ${(props) => props.theme.text};
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  text-align: start;
  a {
    color: ${(props) => props.theme.text};
    font-size: 1.6rem;
    @media (max-width: 1630px) {
      font-size: 1.4rem;
    }

    display: block; /* Fallback for non-webkit */
    display: -webkit-box;
    max-width: 400px;
    line-height: 2.2rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
  }
`;

const StyledCardImage = styled.div`
  position: relative;
  width: calc(100%-20px);
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 10px;
  margin-top: 10px;

  img {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 10px;
`;
// const StyledCategories = styled.div`
//   transition-duration: 0.15s;
//   transition-timing-function: cubic-bezier(0.05, 0, 0, 1);
//   will-change: transform;
//   display: inline-block;
//   white-space: nowrap;
//   font-size: 1.4rem;
//   div {
//     &:first-of-type {
//       margin-left: 24px;
//     }
//     margin-top: 12px;
//     margin-right: 12px;
//     margin-bottom: 12px;
//     margin-left: 0;
//     display: inline-block;
//     height: 32px;
//     min-width: 12px;
//     padding: 0 10px;
//     border-radius: 16px;
//     box-sizing: border-box;
//     outline: none;
//     overflow: hidden;
//     cursor: pointer;
//     user-select: none;
//     position: relative;
//     background-color: ${(p) => p.theme.highlight};
//     align-items: center;
//     justify-content: center;
//     display: inline-flex;
//     line-height: 2.1rem;
//   }
// `;
// const ScrollContainer = styled.div`
//   position: relative;
//   white-space: nowrap;
//   overflow: hidden;
// `;
const Post = ({
  post: { id, title, categories, featuredImage, publishDate, tags },
}) => {
  const user = useSelector(selectUser);
  return (
    <StyledPost>
      <StyledCardHeader>
        <StyledTextContainer>
          <span>{formatDistanceToNow(publishDate, { addSuffix: true })}</span>
          <Link to={`/posts/${id}`}>{title}</Link>
        </StyledTextContainer>

        {user && <IconLink to={`/posts/${id}/edit`}>{edit}</IconLink>}
      </StyledCardHeader>
      <StyledCardImage>
        <Link to={`/posts/${id}`}>
          <img src={featuredImage} alt="img" />
        </Link>
      </StyledCardImage>
      {/* <ScrollContainer>
      <StyledCategories>
        {categories.map((category) => (
          <div>{category}</div>
        ))}
      </StyledCategories>
    </ScrollContainer> */}
    </StyledPost>
  );
};

export default Post;
