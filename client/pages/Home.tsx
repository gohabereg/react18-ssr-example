import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/user/actions';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({
      username: 'johndoe',
      email: 'johndoe@mail.com',
    }));
  }, []);

  return (
    <>
      <h1>Home page</h1>
      <Link to="/profile">Profile</Link>
    </>
  )
}

export default HomePage;
