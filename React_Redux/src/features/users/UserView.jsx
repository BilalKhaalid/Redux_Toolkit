import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
const UserView = () => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <h2>Loading...</h2>}
      {!user.loading && user.users.length
        ? user.users.map((user) => <li key={user.id}>{user.name}</li>)
        : null}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
    </div>
  );
};

export default UserView;
