import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:43PM"
        comment="Nice Post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:43AM"
        comment="That's awesome dude!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jan"
        timeAgo="Yesterday at 5:00AM"
        comment="Yeah....that's good."
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
