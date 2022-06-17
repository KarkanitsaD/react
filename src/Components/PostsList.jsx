import React from 'react';
import PostItem from "./PostItem";

const PostsList = (props) => {
    return (<div>
            <h1 style={{textAlign: "center"}}>{props.list.head}</h1>
            {props.list.posts.map((post, index) => {
                return (<PostItem post={post} key={post.id}/>);
            })}
        </div>);
};

export default PostsList;
