import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  return (
    <div className={s.postsBlok}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post messege='Hey, how are you?' />
        <Post messege='Хорошо' />
      </div>
    </div>
  )
}
export default MyPosts