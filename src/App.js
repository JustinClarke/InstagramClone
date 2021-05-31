import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post';
import {db} from "./firebase";

function App() {
const [posts, setPosts] = useState([
  // {
  //   username: "justin",
  //   caption: "wow this works",
  //   imageUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--JIe3p0M4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/093ewdrgyf1kedlhzs51.png" 
  // },
  // {
  //   username: "cats",
  //   caption: "yup it does",
  //   imageUrl: "https://media.wired.com/photos/5ed06ca9fbf7b2147038a8a9/master/w_2560%2Cc_limit/Gear-New-Pet-1168772154.jpg"
  // },
  // {
  //   username: "tanmay",
  //   caption: "AWESOME",
  //   imageUrl: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg"
  // }
]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc=> doc.data()));
    })
  },[]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage" 
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>
      {
        posts.map(post=>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

      {/* <Post /> */}

    </div>
  );
}

export default App;