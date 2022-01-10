import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author="Alex" timeAgo="16:45" content="Nice blog post" />
      <CommentDetails author="Jane" timeAgo="10:00" content="Nice blog" />
      <CommentDetails author="Joane" timeAgo="02:00" content="Nice photo" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
