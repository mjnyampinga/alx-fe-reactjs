// src/UserContext.js
import React from "react";

// create the context with a default shape
const UserContext = React.createContext({
  name: "",
  email: "",
});

export default UserContext;
