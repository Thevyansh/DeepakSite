import { rgba } from 'polished';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { postTitleChange, selectPostData } from '../../../../../store/post';

const StyledTitle = styled.input`
  width: 100%;
  display: block;
  outline: none;
  padding: 0;
  border: none;
  border-radius: 10px;
  font-size: 4rem;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.text};
  background: transparent;
  &::placeholder {
    color: ${(props) => rgba(props.theme.text, 0.5)};
  }
`;
const Title = () => {
  const dispatch = useDispatch();
  const { title } = useSelector(selectPostData);
  const onChange = (e) => {
    dispatch(postTitleChange(e.target.value));
  };

  return (
    <StyledTitle
      type="text"
      name="title"
      placeholder="Title"
      value={title}
      onChange={onChange}
    />
  );
};

export default Title;
