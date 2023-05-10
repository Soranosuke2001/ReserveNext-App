"use client";

import axios from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post("/api/auth/signin", {
        email,
        password,
      });
      setAuthState({
        error: null,
        loading: false,
        data: response.data,
      });
    } catch (error: any) {
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.message,
      });
      console.log(error);
    }
  };
  const signup = async () => {};

  return {
    signin,
    signup,
  };
};

export default useAuth;
