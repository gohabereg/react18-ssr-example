import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { clearUser } from '../../store/reducers/user/actions';

function ProfilePage() {
  const user = useSelector<AppState, AppState['user']>(state => state.user);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(clearUser());
  };

  return (
    <>
      <h1>Profile page</h1>
      {user && (
        <div>
          Data:
          Username: {user.username}<br />
          Email: {user.email}
        </div>
      )}
      <button onClick={clear}>Clear</button>
      <Link to="/">Home</Link>
    </>
  )
}

export default ProfilePage;
