import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import User from "./User";
import UserDetails from "./UserDetails";

class UsersList extends Component {
  state = {
    users: []
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = async _ => {
    try {
      const usersData = await axios.get("http://localhost:4000/api/users");
      this.setState({ users: usersData.data.users });
    } catch (error) {
      console.log(error);
    }
  };

  deleteUser = async id => {
    const deleted = await axios.delete(`http://localhost:4000/api/users/${id}`);
    console.log(deleted);
    this.getData();
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/users"
          render={props => (
            <UserDetails
              {...props}
              users={this.state.users}
              deleteUser={this.deleteUser}
            />
          )}
        />

        <Route path="/users/:id" component={User} />
      </div>
    );
  }
}

export default UsersList;
