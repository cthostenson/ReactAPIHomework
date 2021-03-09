import {Posts} from './components/Posts/Posts';
import {Books} from './components/Books/Books';
import './App.scss';
import {SearchPosts} from "./components/SearchPosts/searchPosts";
import {Container} from "@material-ui/core";
import React, {useState} from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Post from "./components/Post/Post";

function App() {
    // defining state in a functional component
    //     state  , setState()         default value
    const [posts, setPosts] = useState([]);

  return (
    <Container className="App">
      <h1>Our first react app</h1>
        <SearchPosts onSearchResult={(results) => setPosts(results)} />
      <hr/>
      <Posts posts={posts}/>
    <div className="App">
      <Books />
    </div>
    </Container>
  );
}

export default App;
