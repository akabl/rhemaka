import React, { useState } from 'react';
import './Add__post__modal.css'
import { images } from '../../constants';
import CustomFileInput from  '../Costom__tags/CustomFileInput'
const Add__post__modal = ({ categories, onSubmit, onDiscard}) => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postImage, setPostImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [privacy, setPrivacy] = useState('public');
  const [imageData, setImageData] = useState(null);

  const handleSubmit = () => {
    // Validate inputs here if needed
    // onSubmit({ postTitle, postBody, postImage, selectedCategory, privacy });
    // Reset form after submission
    // setPostTitle('');
    // setPostImage('');
    // setSelectedCategory('');
    // setPrivacy('public');
    setPostImage(imageData)
    console.log(postTitle, postBody, postImage, selectedCategory, privacy)
    onDiscard()
  };

  const handleDiscard = () => {
    onDiscard()
  };
 const handelImageChange = (imageSrc) => {
  setImageData(imageSrc)
 }

  return (
    <div className='modal-background'>
      
    <div className="modal">
      <h2>Add Post</h2>
      <img src={images.closeBtn} className="closeIcon" alt="close button" onClick={onDiscard}/>
      <input
        type="text"
        placeholder="Heading of post..."
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <textarea
        class="body-of-post"
        placeholder="Body of the post..."
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      ></textarea>

      <div className='file-input-container'>
        <CustomFileInput
        result={postImage}
        onImageChange={handelImageChange}
        />
      </div>


      
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="Artificial Intelligence">Artificial Intelligence...</option>
        <option value="Cybersecurity">Cybersecurity...</option>
        <option value="Software">Software...</option>
        <option value="Blockchain">Blockchain...</option>
        <option value="Computers">Computers...</option>
        <option value="Web Design">Web Design...</option>
        <option value="Graphics Design">Graphics Design...</option>
 
        {/* {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))} */}
      </select>
      <div className="post-privacy">

      <label>
        <input
          type="checkbox"
          checked={privacy === 'public'}
          onChange={() => setPrivacy('public')}
        />
        Public
      </label>
      <label>
        <input
          type="checkbox"
          checked={privacy === 'friends'}
          onChange={() => setPrivacy('friends')}
        />
        Friends only
      </label>
      <label>
        <input
          type="checkbox"
          checked={privacy === 'only_me'}
          onChange={() => setPrivacy('only_me')}
        />
        Only me
      </label>
      </div>

      <div className='submit-buttons'>
      <button onClick={handleSubmit}>Post</button>
      <button className="discard_post" onClick={handleDiscard}>Discard post</button>
      </div>
      </div>
    
    </div>
  );
};

export default Add__post__modal;
