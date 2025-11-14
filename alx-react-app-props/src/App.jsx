import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  // same data the starter used
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
