import React from 'react'
import "./Body.css"
import {images} from '../../constants';
import Aside__bar  from '../../components/Aside__bar/Aside__bar'
import Sub__body from '../../components/Sub__body/Sub__body'
import Sub__header from '../../components/Sub__header/Sub__header'
import Faq from '../../components/FAQ/FAQ'
import Profile from '../../components/Profile/Profile';
import Community from '../../components/Community/Community'
import Add__Post__Modal from '../../components/Add__post__modal/Add__post__modal'
import { useState } from 'react'
import { useEffect } from 'react';
import post_s from '../../json.Databases/posts.json';

const Body = ({onSignButtonClick, onPageChange}) =>{
const [currentPage, setCurrentPage] = useState('forum');
const [showModal, setShowModal] = useState(false);
const categories = ['Web Development', 'Cyber Security', 'Graphic Design'];
const [posts, setPosts] = useState(post_s.posts)


const handlePostSubmit = (post_s) => {

  const currentDate = new Date()
const year = currentDate.getFullYear()
const month = currentDate.getMonth() + 1
const day = currentDate.getDate()
const hours = currentDate.getHours()
const minutes = currentDate.getMinutes()
const seconds = currentDate.getSeconds()

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  // handel post submition here
  const newPost = {...post_s, id: formattedDate + "" + Date.now() };
  const updatedPosts = [...posts, newPost];
  setPosts(updatedPosts);
  //update JSON data with new post data
  updatePostsJson(updatedPosts);
  //close modal after submission
  setShowModal(false);
}
const updatePostsJson = (updatedPosts) => {
  const updatedPostsData = {posts: updatedPosts };
  // write updaated data to posts.json
  const jsonData = JSON.stringify(updatedPostsData, null, 2);
  const blob = new Blob([jsonData], {type: 'application/json'})

  const url =URL.createObjectURL(blob);

  const link = document.createElement('a')
  link.href = url;
  link.download = '../../json.Databases/posts.json'
  link.click();
}
const handleDiscardPost = () => {
  // Close modal after submission
  setShowModal(false);
};
const handleShowModal = () => {
  // open modal
  setShowModal(true);
};
const handelPageChange = (page) =>{
  setCurrentPage(page);
};
const [postDetails, setPostDetails] = useState([]);
useEffect(() => {
  setPostDetails(post_s.postDetails)
}, []);

const renderPage =()=>{
  switch(currentPage){
    case 'forum':
      return <>
      {
        postDetails.map( (post) => (
          <Sub__body 
          userImage={post.userImage} 
          title={post.title} 
          userName={post.userName}
          postTime={post.postTime}
          Categorey={post.Categorey}
          postImages={post.postImages}
          postBody={post.postBody}
          views={post.views}
          replys={post.replys}
          hearts={post.hearts}
          share={post.share}
          heartClicked={post.heartClicked}
          key={post.key}
          />
          
        ))
      }
      </>
    case 'community':
      return <Community/>
    case 'faq':
      return <Faq/>
    case 'profile':
      return <Profile/>
    default: 
      return ''
  }
};


return(
        <main  className='main__display'>
          <div className='container main__body'>
            <Aside__bar/>
            <div className='body__main'>
            <Sub__header onSignButtonClick={onSignButtonClick} onPageChange={handelPageChange} currentPage={currentPage} setShowModalButtonClick={handleShowModal}/>
            <div className='container body__main__body'>
              {renderPage()}
              {showModal && (
        <Add__Post__Modal categories={categories} onSubmit={handlePostSubmit} onDiscard={handleDiscardPost}/>
      )}
            </div>
            </div>
          </div>
        </main>
)
          };
          export default Body


