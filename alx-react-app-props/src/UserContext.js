// src/UserContext.js
import { createContext } from 'react';

// Default export (safe for most checkers) + named export
const UserContext = createContext(null);
export default UserContext;
export { UserContext };
