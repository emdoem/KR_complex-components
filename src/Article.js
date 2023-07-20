import React from "react";
class Article extends React.Component {
  render() {
    return (
      <article>
        <h1>{this.props.content}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>{this.props.content}</p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </article>
    );
  }
}

export default Article;
