import { useState, useEffect } from 'react';

import { db, storage, timestamp } from './firebase';

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // runs every time the file value changes
  useEffect(() => {
    if (file) {
      const collectionRef = db.collection('images');
      // storage ref
      const fileRef = storage.ref(`images/${file.name}`);
      const fileUpload = fileRef.put(file);
      fileUpload.on(
        'state_changed',
        (snapshot) => {
          // track the upload progress
          const percentage = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          // get the public download img url
          const downloadUrl = await fileUpload.snapshot.ref.getDownloadURL();
          // Add to firestore
          const createAt = timestamp();
          collectionRef.add({ url: downloadUrl, createAt });
          // save the url to local state
          setUrl(downloadUrl);
        }
      );
    }
  }, [file]);

  return { progress, url, error, setUrl };
};
