"use client";

import axios from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";
import { getCookie } from "cookies-next";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
  const signin = async ({
    email,
    password,
    handleClose,
  }: {
    email: string;
    password: string;
    handleClose: () => void;
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
        data: response.data.user,
      });

      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.message,
      });
      console.log(error);
    }
  };

  const signup = async ({
    email,
    password,
    firstName,
    lastName,
    city,
    phone,
    handleClose,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    city: string;
    phone: string;
    handleClose: () => void;
  }) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });

    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
        city,
        phone,
      });

      setAuthState({
        error: null,
        loading: false,
        data: response.data.user,
      });

      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.message,
      });
      console.log(error);
    }
  };

  return {
    signin,
    signup,
  };
};

export default useAuth;
