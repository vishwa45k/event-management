import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {});

  const login = (userData) => {
    setUser(userData);
    navigate("/");
    setIsLogin(true);
  };
  const logout = () => {
    setUser(null);
    navigate("/logout");
    setIsLogin(false);
  };
  return (
    <>
      <UserContext.Provider value={{ login, user, logout, isLogin }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
