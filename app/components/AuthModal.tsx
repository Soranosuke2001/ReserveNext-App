"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthInputs from "./AuthInputs";

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

export default function AuthModal({ isSignIn }: { isSignIn: Boolean }) {
  const [open, setOpen] = useState(false);
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
          <div className="p-2">
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
              <AuthInputs inputs={inputs} handleChangeInput={handleChangeInput} />
              <button className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400">
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}