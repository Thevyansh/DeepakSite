import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useDispatch, useSelector } from 'react-redux';

import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';

import styled from 'styled-components';

import FirebaseUploadAdapter from './FirebaseUploadAdapter';
import {
  selectPostData,
  postContentChanged,
  selectEditorLoading,
} from '../../store/post';

const Loading = styled.div``;

const editorConfiguration = {
  toolbar: {
    viewportTopOffset: 120,
    items: [
      'Heading',
      'FontColor',
      'Highlight',
      '|',
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      'RemoveFormat',
      '|',
      'Alignment',
      'Outdent',
      'Indent',
      '|',
      'BlockQuote',
      'BulletedList',
      'NumberedList',
      'Code',
      'CodeBlock',
      '|',
      'Link',
      'InsertImage',
      'InsertTable',
      'mediaEmbed',
      '|',
      'Undo',
      'Redo',
    ],
  },
  mediaEmbed: {
    previewsInData: true,
    toolbar: [],
  },
  image: {
    // Configure the available styles.
    styles: ['alignLeft', 'alignCenter', 'alignRight'],

    // Configure the available image resize options.
    resizeOptions: [
      {
        name: 'resizeImage:original',
        label: 'Original',
        value: null,
      },
      {
        name: 'resizeImage:50',
        label: '50%',
        value: '50',
      },
      {
        name: 'resizeImage:75',
        label: '75%',
        value: '75',
      },
    ],

    // You need to configure the image toolbar, too, so it shows the new style
    // buttons as well as the resize buttons.
    toolbar: [
      'imageStyle:alignLeft',
      'imageStyle:alignCenter',
      'imageStyle:alignRight',
      '|',
      'resizeImage',
      '|',
      'imageTextAlternative',
    ],
  },
};

const Editor = () => {
  const { content } = useSelector(selectPostData);
  const loading = useSelector(selectEditorLoading);
  const dispatch = useDispatch();

  const onChange = (event, editor) => {
    const data = editor.getData();
    dispatch(postContentChanged(data));
  };

  return (
    <>
      {loading ? (
        <Loading>
          <p>Loading...</p>
        </Loading>
      ) : (
        <>
          <CKEditor
            editor={CustomEditor}
            config={editorConfiguration}
            data={content}
            onReady={(editor) => {
              editor.plugins.get('FileRepository').createUploadAdapter = (
                loader
              ) => new FirebaseUploadAdapter(loader);
            }}
            onChange={onChange}
          />
          <div
            className="ck-content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </>
      )}
    </>
  );
};

export default Editor;
