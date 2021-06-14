import React from 'react';
import { useDispatch } from 'react-redux';
import { postImageChanged } from '../../../../store/post';
import Dropzone from '../../../shared/Dropzone/Dropzone';

const FeaturedImage = () => {
  const dispatch = useDispatch();
  const onChange = (image) => {
    console.log(image);
    dispatch(postImageChanged(image));
  };
  return (
    <div>
      <h3>Featured Image</h3>
      <Dropzone setFileURL={onChange} />
    </div>
  );
};

export default FeaturedImage;
