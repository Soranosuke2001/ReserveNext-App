"use client";

import { FC, useState, createContext, Dispatch, SetStateAction } from "react";

interface AuthContextProps {
  children: React.ReactNode;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: number;
  city: string;
  email: string;
}

interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State {
  setAuthState: Dispatch<SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

const AuthContext: FC<AuthContextProps> = ({ children }) => {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  });
  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
