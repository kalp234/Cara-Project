import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 👈 Add loading state

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        name: parsedUser.name,
        userId: parsedUser._id,
        accesstoken: parsedUser.accesstoken,
        refreshtoken: parsedUser.refreshtoken,
      });
    }
    setLoading(false); // 👈 Set loading false after session check
  }, []);

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
