import "./App.css";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  // single source of truth for user data
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // provide userData to the whole subtree
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
