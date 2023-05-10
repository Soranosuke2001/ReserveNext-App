"use client";

import {
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

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
    loading: true,
    data: null,
    error: null,
  });

  const fetchUser = async () => {
    setAuthState({
      error: null,
      loading: true,
      data: null,
    });
    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        setAuthState({
          error: null,
          loading: false,
          data: null,
        });

        return;
      }

      const response = await axios.get("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({
        error: null,
        loading: false,
        data: response.data.user,
      });
    } catch (error: any) {
      setAuthState({
        error: error.response.data.message,
        loading: false,
        data: null,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
