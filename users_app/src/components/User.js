import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    user: [],
    posts: []
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const userData = await axios.get(`http://localhost:4000/api/users/${id}`);
    this.setState({ user: userData.data.user });

    const userPost = await axios.get(
      `http://localhost:4000/api/users/${id}/posts`
    );
    this.setState({ posts: userPost.data.userPosts });
  };
  render() {
    return (
      <div>
        <Link to="/users">
          <h1>Home</h1>
        </Link>
        <h1>{this.state.user.name}</h1>
        <h2>{this.state.user.id}</h2>
        {this.state.posts.map(post => {
          return (
            <div>
              <p>{post.text}</p>
              <p>{post.postedBy}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default User;
