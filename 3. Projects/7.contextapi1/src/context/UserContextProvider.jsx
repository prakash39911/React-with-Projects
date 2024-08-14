import React from "react";
import { UserContext } from "./UserContext";

// Children -- whatever comes just pass it as it is. e.g. card Component or dashboard component etc.

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
