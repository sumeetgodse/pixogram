import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadImage from './comps/UploadImage';
import Modal from './comps/Modal';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadImage />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
