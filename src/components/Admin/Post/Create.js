import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Categories from './Categories/Categories';
import Tags from './Tags/Tags';
import Title from './Title/Title';
import StyledButton from '../../shared/Button/StyledButton';
import Edit from '../../../pages/Edit/Edit';
import {
  selectPostData,
  postPublishModal,
  createDraft,
  getPostLocal,
  reset,
} from '../../../store/post';
import FeaturedImage from './FeaturedImage/FeaturedImage';
import PublishModal from './Publish Modal/PublishModal';
import { errorAdded } from '../../../store/error';

const StyledEditorContainer = styled.div`
  margin: 20px;
  ${StyledButton} {
    box-shadow: ${(props) => props.theme.shadowSoft};
  }
`;

const StyledHeader = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 3rem;
  gap: 2rem;
`;

const StyledEditing = styled.div`
  display: flex;
  background: ${(props) => props.theme.background};
  padding: 5rem;
  border-radius: 24px;
  max-width: 1600px;
  margin: 0 auto;
  gap: 5rem;
  flex-wrap: wrap;
  box-shadow: ${(props) => props.theme.shadowSoft};
`;
// const StyledPostContainer = styled.div`
//   /* flex: 1 1 700px;
//   display: flex;
//   flex-direction: column;
//   min-width: 600px;
//   @media (max-width: 760px) {
//     min-width: initial;
//     width: 100%;
//   } */
// `;

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

const Create = () => {
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
      <StyledEditing>
        <Title />
        <Edit />
        <StyledOptions>
          <FeaturedImage />
          <Categories />
          <Tags />
        </StyledOptions>
      </StyledEditing>
      <PublishModal />
    </StyledEditorContainer>
  );
};

export default Create;
