import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  postPublishModal,
  selectPostData,
  selectPublishModal,
  postPublishDateChanged,
  createPost,
} from '../../../../store/post';
import { DateTimeMobilePicker } from '../../../PublishDate';
import StyledButton from '../../../shared/Button/StyledButton';

const StyledPublishModel = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem;
  border-radius: 24px;
  font-size: 16px;
  z-index: 100;
  span {
    margin-right: 2rem;
  }
  ${StyledButton} {
    display: block;
    margin-top: 2rem;
    background: ${(props) => props.theme.gray2};
    margin-left: auto;
  }
  box-shadow: ${(props) => props.theme.shadowSoft};
  background: ${(props) => props.theme.elevation1};
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  transition: all 0.3s ease;
`;

const PublishModal = () => {
  const dispatch = useDispatch();
  const publishModal = useSelector(selectPublishModal);
  const { publishDate } = useSelector(selectPostData);

  useEffect(() => {
    dispatch(postPublishDateChanged(Date.now()));
  }, [dispatch, publishModal]);

  const handlePublish = () => {
    dispatch(createPost());
  };

  return (
    <>
      {publishModal ? (
        <>
          <StyledPublishModel>
            <div>
              <span>Publish Date:</span>
              <DateTimeMobilePicker
                name="Publish Date"
                date={publishDate}
                setDate={(date) => dispatch(postPublishDateChanged(date))}
                minDate={Date.now()}
              />
            </div>
            <StyledButton type="button" onClick={handlePublish}>
              Publish
            </StyledButton>
          </StyledPublishModel>
          <Backdrop onClick={() => dispatch(postPublishModal(false))} />
        </>
      ) : null}
    </>
  );
};

export default PublishModal;
