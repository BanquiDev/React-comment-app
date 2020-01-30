import React from 'react';

import Post from './components/post'
import posts from './data/posts.json'
import './App.css';



function App() {
  return (
    <div className="App">
    <h1>Mi Blog</h1>

    <p>Hay {posts.length} posts</p>

  {posts.map((post, index) => <Post data={post} key={index}/> )}

    </div>
  );
}

export default App;
