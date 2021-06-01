 import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import FetchedPostsState from '../store/FetchedPostsState'

const FetchedPosts = observer(() => {
  useEffect(() => {
    //we can do like that without fetch in mobx
    //fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10').then(res => res.json()).then(result => FetchedPostsState.setPosts(result));
    //or like that
    FetchedPostsState.setPosts();
  }, []);
  return (
      <ul>
        {FetchedPostsState.posts
          ? FetchedPostsState.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))
          : null
        }
      </ul>
)});

 export default FetchedPosts;