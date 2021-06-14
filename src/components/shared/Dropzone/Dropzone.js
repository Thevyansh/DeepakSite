import { rgba } from 'polished';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled, { keyframes } from 'styled-components';
import { useStorage } from '../../../firebase/useStorage';
import { file as fileIcon } from '../Icons/Icons';

const StyledDropzone = styled.div`
  padding-bottom: 56.25%;
  border-radius: 24px;
  border: 1px dashed ${(props) => rgba(props.theme.text, 0.5)};
  color: ${(props) => props.theme.text};
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const CenteredText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    margin-bottom: 10px;
  }
  p {
    font-size: 1.6rem;
    color: ${(props) => rgba(props.theme.text, 0.5)};
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const ImagePreLoader = styled.div`
  background-image: url(${(props) => props.bgImg});
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  position: relative;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.text};
  background-position: center center;

  @animation image-preloader-spin {
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: image-preloader-spin;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 3;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.text};
    border-top-color: ${({ theme }) => theme.background};
    left: 50%;
    top: 50%;
    margin-top: -30px;
    margin-left: -30px;
    animation: image-preloader-spin 2s infinite linear;
    box-sizing: border-box;
  }
`;

const Dropzone = ({ setFileURL }) => {
  const [preview, setPreview] = useState({});
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const { progress, url, setUrl } = useStorage(file);

  const onDrop = useCallback(
    (acceptedFile) => {
      setUrl(null);
      setUploading(true);
      setPreview(URL.createObjectURL(acceptedFile[0]));
      setFile(acceptedFile[0]);
    },
    [setUrl]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  useEffect(() => {
    if (url) {
      URL.revokeObjectURL(preview);
      setFile(null);
      setPreview(null);
      setUploading(false);
      setFileURL(url);
    }
  }, [url, uploading, preview, setFileURL]);

  return (
    <StyledDropzone className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <CenteredText>
          {url ? (
            <ImageContainer>
              <img src={url} alt="img" />
            </ImageContainer>
          ) : uploading ? (
            <>
              <ImagePreLoader bgImg={preview} />
              <span>{progress}%</span>
            </>
          ) : isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <>
              <span>{fileIcon}</span>
              <p>Drag 'n' drop file, or click to select file</p>
            </>
          )}
        </CenteredText>
      </div>
    </StyledDropzone>
  );
};

export default Dropzone;
