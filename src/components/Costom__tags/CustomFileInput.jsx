import React, { useState } from 'react';
import "../Add__post__modal/Add__post__modal.css"
import { images } from '../../constants';

const CustomFileInput = ({onImageChange}) => {
  const [imageSrc, setImageSrc] = useState(images.addImage1);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImageSrc = e.target.result
        setImageSrc(newImageSrc);
        onImageChange(newImageSrc)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="file-input-container">
      <input
        type="file"
        id="fileInput"
        className="file-input"
        accept="image/*"
        onChange={handleFileChange}

      />
      <div className="custom-file-input" onClick={() => document.getElementById('fileInput').click()}>
        <img id="customFileInputImage" src={imageSrc} alt="Click to upload" />
      </div>
    </div>
  );
};

export default CustomFileInput;
