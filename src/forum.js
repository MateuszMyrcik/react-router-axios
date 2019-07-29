import React, { Component } from "react";
import axios from "axios";

class Forum extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      res => {
        setTimeout(() => {
          this.setState({
            post: res.data.slice(0, 10)
          });
        }, 2000);
      },
      () => {
        console.log(this.state.post);
      }
    );
  }

  post() {
    let posts = [];
    for (let i = 0; i < 10; i++) {
      posts.push(
        <div>
          <div className="row" key={Math.random()}>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title" key={this.state.postTitle}>
                    {i + 1}.{" "}
                    {this.state.post
                      ? this.state.post[i]["title"]
                      : "Loading post..."}
                  </span>
                  <p>{this.state.post ? this.state.post[i]["body"] : "..."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return posts;
  }

  render() {
    return (
      <div>
        <h1>Witam w Forum !</h1>
        {this.post()}
      </div>
    );
  }
}

export default Forum;
