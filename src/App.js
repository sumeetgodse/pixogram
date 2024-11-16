import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadImage from './comps/UploadImage';
import Modal from './comps/Modal';
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from './firebase/config';

const App = () => {

  const [selectedImg, setSelectedImg] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFile = (imageUpload) => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  return (
    <div className="App">
      <Title />
      <UploadImage uploadFile={uploadFile} />
      <ImageGrid setSelectedImg={setSelectedImg} imageUrls={imageUrls} setImageUrls={setImageUrls} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
