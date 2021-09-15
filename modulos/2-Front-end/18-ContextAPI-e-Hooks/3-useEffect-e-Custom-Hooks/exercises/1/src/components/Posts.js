import React from 'react';
import { Consumer } from './RedditContext';

function Posts() {
  return (
    <Consumer>
      {({ posts }) => (
        <ul>
          {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
      )}
    </Consumer>
  )
}

export default Posts;