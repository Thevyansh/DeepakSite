import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deletePost, loadPostDataById, updatePost } from '../../../store/post';
import StyledButton from '../../shared/Button/StyledButton';
import PostEditor from './PostEditor/PostEditor';
import { StyledEditorContainer, StyledHeader } from './styles';

const EditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadPostDataById(id));
  }, [dispatch, id]);

  const onDelete = () => {
    dispatch(deletePost(id));
    history.push('/');
  };

  return (
    <StyledEditorContainer>
      <StyledHeader>
        <StyledButton type="button" onClick={onDelete}>
          Delete
        </StyledButton>
        <StyledButton type="button" onClick={() => dispatch(updatePost(id))}>
          Update
        </StyledButton>
      </StyledHeader>
      <PostEditor />
    </StyledEditorContainer>
  );
};

export default EditPost;
