import React, {useState} from "react";
import "./Styles/App.css";
import PostItem from "./Components/PostItem";
import PostsList from "./Components/PostsList";
import MyButton from "./Components/UI/button/MyButton";

function App() {

    const [postsList, setPosts] = useState({
        head: "HEAD",
        posts:[
        {id: 1, title: "JS", body: "Description js!"},
        {id: 2, title: "C#", body: "Description c#!"},
        {id: 3, title: "C++", body: "Description c++!"},
    ]})

    return (
        <div className="App">
            <form>
                <input id={"title"} type={"text"} placeholder={"title"}/>
                <input id={"description"} type={"text"} placeholder={"description"}/>
                <MyButton disabled={true}>Create post</MyButton>
            </form>
            <PostsList list={postsList}/>
        </div>
    );
}

export default App;
