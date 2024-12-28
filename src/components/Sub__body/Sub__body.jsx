  import React, { useState } from "react";
  import {images} from '../../constants';
  import "./Sub__body.css"
  import Costom__details from '../Costom__tags/Costom__details'

  const Sub__body = ({
    userImage, 
    title,
    userName,
    postTime,
    Categorey,
    postImages,
    postBody,
    views,
    replys,
    hearts,
    share,
    maxInitialChars = 450

  }) => {
    const [activeIcon, setActivation] = useState(null);
    const [comment, setcomment] = useState('');
    const [expanded, setExpanded] = useState(false)

    const shouldTruncate = postBody.length > maxInitialChars;
    const displayText = expanded ? postBody : postBody.slice(0, maxInitialChars)

    const handelSubmit = () =>{
      console.log(comment)
      document.getElementById("commentInput").value = '';
    }

    const handelPostReaction = (icon) => {
      setActivation(icon);
    };

    const reactionStyle = (icon) => ({
    filter:activeIcon === icon ? 'none' : 'grayscale(100%)',
    backgroumd: '#000000',
    transform: 'scale(85%)',
    cursor:'pointer'
    })

  return (
    <>

      {/* this is a user review */}
      <div className='users__review'>
        <div className='user__profile__pic'>
          <img src={images.profile4} alt="user photo" />
          <div className="pic__line"></div>
        </div>
        <div className='review'>
          <div className='review__header'>
            <h4>{title} </h4>
            <p><span className="userName"> {userName} </span> - {postTime} - {Categorey}</p>
          </div>
          <div className={`review__body ${expanded ? 'expanded' : ''}`}>
            <img src={images.teampic} alt="postImage" />
            <p>{displayText}
             {!expanded && shouldTruncate && '...'}{shouldTruncate && (
              <span onClick={() => setExpanded(!expanded)}>{expanded ? 'show less' : 'Continue reading'} </span>
             )} 
            </p>
          </div>
          <div className='review__footer'>
            <ul> 

            <Costom__details 
              summary={ <span> <img src={images.heart} alt="" /> <span id="review__footer"> {hearts} </span> </span>}>

                  <ul className="users-who-reacted">
                  <li><img src={images.profile3} alt="user" className="userimage"/> <p> John Wharlamat Jr </p> <img src={images.like} alt="user" /></li>

                  <li><img src={images.profile4} alt="user" className="userimage"/> <p> Ukovom Ukovom Emmanuel </p> <img src={images.love} alt="user" /></li>

                  <li><img src={images.profile2} alt="user" className="userimage"/><p> Jr Paul Okorie </p> <img src={images.smilie} alt="user" /></li>

                  <li><img src={images.profile6} alt="user" className="userimage"/><p> Mrs Jeny Johnson </p> <img src={images.love} alt="user" /></li>
                  <li><img src={images.profile4} alt="user" className="userimage"/> <p> Ukovom Ukovom Emmanuel </p> <img src={images.love} alt="user" /></li>

                  <li><img src={images.profile2} alt="user" className="userimage"/><p> Jr Paul Okorie </p> <img src={images.smilie} alt="user" /></li>

                  <li><img src={images.profile6} alt="user" className="userimage"/><p> Mrs Jeny Johnson </p> <img src={images.love} alt="user" /></li>

                  </ul>

            </Costom__details>

            <Costom__details 
              summary={<span><img src={images.eye} alt="" /> <span id="review__footer"> {views} </span> </span>}>
              
            </Costom__details>

            <Costom__details 
              summary={<span> <img src={images.message} alt="" /><span id="review__footer"> {replys} </span></span>}>

                <ul className='users-comments'>
                  <li>
                    <img src={images.profile3} alt="user" className="userimage"/>
                    <p className="reply-body">  
                      <span>
                      <h5>
                        @dodocodewith
                      </h5>
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe sed, similique autem vitae eum, eveniet? 
                      amet consectetur adipisicing elit. Blanditiis saepe sed, similique autem vitae eum, eveniet? 
                    </p>
                    <div>
                        <p> - Reactions <span> 40 </span><span><img src={images.love} alt="heart icon" /></span></p>
                        <p> - Reply <span> 10 </span></p>
                    </div>

                    <ul className='users-comments users-reply'>
                  <li>
                    <img src={images.profile1} alt="user" className="userimage"/>
                    <p className="reply-body"> 
                      <span>
                      <h5>
                        @Daddyin Thelord
                      </h5>
                        </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.  eveniet? consectetur adipisicing elit.  eveniet? 
                    </p>
                    <div>
                        <p> - Reactions <span> 2 </span><span><img src={images.smilie} alt="heart icon" /></span></p>
                        <p>  Reply </p>
                    </div>
                        
                  </li>
                </ul>

                  </li>

                  <li>
                    <img src={images.profile4} alt="user" className="userimage"/>
                    <p className="reply-body">  
                      <span>
                      <h5>
                        @dodocodewith
                      </h5>
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe sed, similique autem vitae eum, eveniet? 
                    </p>
                    <div>
                        <p> - Reactions <span> 40 </span><span><img src={images.love} alt="heart icon" /></span></p>
                        <p> - Reply <span> 10 </span></p>
                    </div>

                    <ul className='users-comments users-reply'>
                  <li>
                    <img src={images.profile6} alt="user" className="userimage"/>
                    <p className="reply-body"> 
                      <span>
                      <h5>
                        @Daddyin Thelord
                      </h5>
                        </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.  eveniet? 
                    </p>
                    <div>
                        <p> - Reactions <span> 2 </span><span><img src={images.smilie} alt="heart icon" /></span></p>
                        <p>  Reply </p>
                    </div>
                        
                  </li>
                </ul>

                  </li>
                </ul>
              
              
            </Costom__details>

            <Costom__details 
              summary={ <span><img src={images.share} alt="" /><span id="review__footer"> {share}</span></span>}>
            </Costom__details>           
            </ul>

            <div className="add-reply">
              <input type="text" placeholder="reply" value={comment} onChange={(e) => setcomment(e.currentTarget.value)} id="commentInput"/>
              <button onClick={handelSubmit}><img class='submit-comment' src={images.sendArrow} alt="" /></button>
            </div>

          </div>
        </div>

        <div className='viewers__reaction'>
          <div>

          <img src={images.smilie} className="smilie" style={reactionStyle('smilie')} onClick={() => handelPostReaction('smilie')}  alt="love" />
          <img src={images.love} className="love" style={reactionStyle('love')} onClick={() => handelPostReaction('love')}  alt="love" />

          <img src={images.like} className="like" style={reactionStyle('like')} onClick={() => handelPostReaction('like')}  alt="love" />

          </div>

          <Costom__details 
              summary={ <img className="threeDots" src={images.threeDots} alt="" />}>

          <ul>
              <li>Add to view later</li>
              <li>Report post</li>
              <li>follow this post</li>
              <li>follow username </li>
              <li>Recommend this post</li>
          </ul>
            </Costom__details> 
          
        </div>
      </div>
      
      {/* it ends here */}

  </>
  )}
  export default Sub__body