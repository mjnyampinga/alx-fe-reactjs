import React from 'react';
import { UserContext } from './UserContext';
import UserProfile from './UserProfile';

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  // No prop drilling: wrap the tree with the Provider
  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
