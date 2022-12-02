import React from "react";
import Markdown from "react-markdown";
import postlist from "../posts.json";

import "./components.css";

const PostList = () => {
  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });
  return (
    <div className="postlist">
      <h1 className="title">All Posts</h1>
      {postlist.length &&
        postlist.map((post, i) => {
          return (
            <div key={i} className="post-card">
              <div className="img-container">
                {post.thumbnail && (
                  <img
                    className="thumbnail"
                    width={80}
                    src={post.thumbnail}
                    alt=""
                  />
                )}
                <h2 className="post-title">
                  <a className="links" href={`/post/${post.id}`}>
                    {post.title}
                  </a>
                </h2>
              </div>
              <small>
                Published on {post.date} by {post.author}
              </small>
              <hr />
              <Markdown source={excerptList[i]} escapeHtml={false} />
              <small>
                <a className="links" href={`/post/${post.id}`}>
                  Read more
                </a>
              </small>
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
