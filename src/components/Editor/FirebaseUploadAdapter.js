/* eslint-disable default-case */
// eslint-disable-next-line default-case
import { storage } from '../../firebase/firebase';

class FirebaseUploadAdapter {
  constructor(loader) {
    this.loader = loader;
    this.metadata = {
      contentType: 'image/jpeg',
    };
    this.uploadTask;
    this.fileRef;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const storageRef = storage.ref();
          const fileRef = storageRef.child(`images/${file.name}`);
          this.uploadTask = fileRef.put(file, this.metadata);
          fileRef
            .getDownloadURL()
            .then((url) => {
              resolve({
                default: url,
              });
            })
            .catch((error) => {
              switch (error.code) {
                case 'storage/object-not-found':
                  console.log("File doesn't exist");
                  break;
                case 'storage/unauthorized':
                  console.log(
                    "User doesn't have permission to access the object"
                  );
                  break;
                case 'storage/canceled':
                  console.log('User canceled the upload');
                  break;

                // ...

                case 'storage/unknown':
                  console.log(
                    'Unknown error occurred, inspect the server response'
                  );
                  break;
              }
              console.log(error);
              this.uploadTask.on(
                'state_changed',
                (snapshot) => {
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log(`Upload is ${progress}% done`);
                  switch (snapshot.state) {
                    case 'paused':
                      console.log('Upload is paused');
                      break;
                    case 'running':
                      console.log('Upload is running');
                      break;
                  }
                },
                (error) => {
                  // A full list of error codes is available at
                  // https://firebase.google.com/docs/storage/web/handle-errors
                  // eslint-disable-next-line default-case
                  switch (error.code) {
                    case 'storage/unauthorized':
                      reject(
                        new Error(
                          " User doesn't have permission to access the object"
                        )
                      );
                      break;

                    case 'storage/canceled':
                      reject(new Error('User canceled the upload'));
                      break;

                    case 'storage/unknown':
                      reject(
                        new Error(
                          'Unknown error occurred, inspect error.serverResponse'
                        )
                      );
                      break;
                  }
                },
                () => {
                  // Upload completed successfully, now we can get the download URL
                  this.uploadTask.snapshot.ref
                    .getDownloadURL()
                    .then(function (downloadURL) {
                      console.log('File available at', downloadURL);

                      resolve({
                        default: downloadURL,
                      });
                    });
                }
              );
            });
        })
    );
  }

  abort() {
    if (this.uploadTask) {
      // Upload is not complete yet, let's cancel
      this.uploadTask.cancel();
    }
  }
}

export default FirebaseUploadAdapter;
