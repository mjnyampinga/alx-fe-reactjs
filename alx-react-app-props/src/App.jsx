// src/App.jsx
import React from 'react';
import UserContext from './UserContext';
import UserProfile from './UserProfile';

function App() {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
