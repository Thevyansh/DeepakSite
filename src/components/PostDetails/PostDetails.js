import { motion } from 'framer-motion';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import EditorJs from 'react-editor-js';
import {
  loadPostDetails,
  currentPostRemoved,
  selectPostDetails,
  selectPostIsLoading,
} from '../../store/posts';
import {
  CKContent,
  StyledContent,
  StyledTitle,
  StyledContainer,
  Image,
  StyledHeader,
  StyledAds,
  Centered,
  StyledPost,
} from './styles';

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(selectPostDetails);
  const isLoading = useSelector(selectPostIsLoading);
  useEffect(() => {
    dispatch(loadPostDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>{_.truncate(post?.title, { length: 60 })} - Acharyam</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          post && (
            <Centered>
              <StyledContainer>
                <StyledHeader>
                  <Image>
                    <img src={post.featuredImage} alt="Featured" />
                  </Image>
                  <StyledTitle>{post.title}</StyledTitle>
                </StyledHeader>
                <StyledPost>
                  <StyledContent>
                    <CKContent>
                      <div
                        className="ck-content"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </CKContent>
                  </StyledContent>
                  {false && <StyledAds />}
                </StyledPost>
              </StyledContainer>
            </Centered>
          )
        )}
      </motion.div>
    </>
  );
};

export default PostDetails;
