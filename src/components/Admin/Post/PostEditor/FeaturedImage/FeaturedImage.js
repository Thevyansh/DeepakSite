import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postImageChanged, selectPostData } from '../../../../../store/post';
import Dropzone from '../../../../shared/Dropzone/Dropzone';

const FeaturedImage = () => {
  const { featuredImage } = useSelector(selectPostData);
  const dispatch = useDispatch();
  const onChange = (image) => {
    dispatch(postImageChanged(image));
  };
  return (
    <div>
      <h3>Featured Image</h3>
      <Dropzone setFileURL={onChange} imageUrl={featuredImage} />
    </div>
  );
};

export default FeaturedImage;
