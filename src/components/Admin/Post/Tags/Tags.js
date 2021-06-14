/* eslint-disable default-case */
import React, { useState } from 'react';

import CreatableSelect from 'react-select/creatable';
import { useDispatch, useSelector } from 'react-redux';
import { StyledTags } from './styles';
import { selectPostData, postTagsChanged } from '../../../../store/post';

const components = {
  DropdownIndicator: null,
};

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(selectPostData);
  const [tag, setTag] = useState('');

  const handleChange = (value) => {
    dispatch(postTagsChanged(value));
  };
  const handleInputChange = (input) => {
    setTag(input);
  };
  const handleKeyDown = (e) => {
    if (!tag) return;
    switch (e.key) {
      case 'Enter':
      case 'Tab':
        setTag('');
        dispatch(postTagsChanged([...tags, { label: tag, value: tag }]));
        e.preventDefault();
        break;
      case ' ':
        setTag('');
        dispatch(postTagsChanged([...tags, { label: tag, value: tag }]));
        e.preventDefault();
    }
  };

  return (
    <StyledTags>
      <h3>Tags</h3>
      <CreatableSelect
        components={components}
        inputValue={tag}
        isMulti
        isClearable
        menuIsOpen={false}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type tags"
        value={tags}
        className="rs-container"
        classNamePrefix="rs"
      />
    </StyledTags>
  );
};

export default Tags;
