import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StyledButton from '../../shared/Button/StyledButton';
import {
  selectPostData,
  postPublishModal,
  createDraft,
  getPostLocal,
  reset,
} from '../../../store/post';
import PublishModal from './PublishModal/PublishModal';
import { errorAdded } from '../../../store/error';
import { StyledEditorContainer, StyledHeader } from './styles';
import PostEditor from './PostEditor/PostEditor';

const CreatePost = () => {
  const { title } = useSelector(selectPostData);

  const dispatch = useDispatch();

  // useDisableBodyScroll(publishModel);

  // const handlePublish = async () => {
  //   setIsLoading(true);
  //   const post = {
  //     title,
  //     categories: categories.map((el) => el.label),
  //     content,
  //     tags,
  //     featuredImage,
  //     publishDate: new Date(publishDate),
  //     createdAt: new Date(),
  //     private: false,
  //   };

  //   try {
  //     await db.collection('posts').add(post);
  //     setIsLoading(false);
  //     setHasError(null);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setHasError(error);
  //   }
  // };

  useEffect(() => {
    dispatch(getPostLocal());
  }, [dispatch]);

  const handleDraft = () => {
    if (!title) {
      return dispatch(
        errorAdded({
          message: 'Title is a Required Field!',
        })
      );
    }

    dispatch(createDraft());
    // setIsLoading(true);
    // const post = {
    //   title,
    //   categories: categories.map((el) => el.label),
    //   content,
    //   tags,
    //   featuredImage,
    //   publishDate: new Date(publishDate),
    //   createdAt: new Date(),
    //   private: false,
    // };
    // try {
    //   await db.collection('drafts').add(post);
    //   setIsLoading(false);
    //   setHasError(null);
    // } catch (error) {
    //   setIsLoading(false);
    //   setHasError(error);
    // }
  };

  return (
    <StyledEditorContainer>
      <StyledHeader>
        <StyledButton
          type="button"
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </StyledButton>
        <StyledButton type="button" onClick={handleDraft}>
          Draft
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => dispatch(postPublishModal(true))}
        >
          Publish
        </StyledButton>
      </StyledHeader>
      <PostEditor />
      <PublishModal />
    </StyledEditorContainer>
  );
};

export default CreatePost;
