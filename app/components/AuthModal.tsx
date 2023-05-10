"use client";

import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthInputs from "./AuthInputs";
import useAuth from "../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const { data, error, loading } = useContext(AuthenticationContext);
  const { signin, signup } = useAuth();

  const [open, setOpen] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isSignIn) {
      if (inputs.email && inputs.password) {
        setSubmitDisabled(false);
        return;
      } else {
        if (
          inputs.firstName &&
          inputs.lastName &&
          inputs.city &&
          inputs.email &&
          inputs.password &&
          inputs.phone
        ) {
          setSubmitDisabled(false);
          return;
        }
      }
    }

    setSubmitDisabled;
  }, [inputs]);

  const buttonContent = (isSignIn: Boolean) => {
    return (
      <button
        className={`${
          isSignIn ? "bg-blue-400 text-white" : ""
        } border p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
    );
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (isSignIn) {
      signin({ email: inputs.email, password: inputs.password, handleClose: handleClose});
    }
  };

  return (
    <div>
      {buttonContent(isSignIn)}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <div className="h-full w-full flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <div className="p-2">
              {error && (
                <Alert severity="error" className="mb-4 text-center">
                  {error}
                </Alert>
              )}
              <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                <p className="text-sm">
                  {isSignIn ? "Sign In" : "Create an Account"}
                </p>
              </div>
              <div className="m-auto">
                <h2 className="text-2xl font-light text-center">
                  {isSignIn
                    ? "Log Into Your Account"
                    : "Create Your ReserveNext Account"}
                </h2>
                <AuthInputs
                  inputs={inputs}
                  handleChangeInput={handleChangeInput}
                  isSignIn={isSignIn}
                />
                <button
                  className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                  disabled={submitDisabled}
                  onClick={handleSubmit}
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
