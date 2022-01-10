import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeAgo="16:45"
          content="Nice blog post"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails author="Jane" timeAgo="10:00" content="Nice blog" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails author="Joane" timeAgo="02:00" content="Nice photo" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
