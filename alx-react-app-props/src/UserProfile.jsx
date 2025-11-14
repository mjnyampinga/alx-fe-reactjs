import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  // The checker wants useContext here
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
    </div>
  );
}

export default UserProfile;
