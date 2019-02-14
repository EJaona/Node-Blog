import React from "react";
import { Link } from "react-router-dom";

const UserDetails = props => {
  return (
    <div>
      {props.users.map(user => {
        return (
          <h1>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            <input
              type="button"
              value="X"
              onClick={() => props.deleteUser(user.id)}
            />
          </h1>
        );
      })}
    </div>
  );
};

export default UserDetails;
