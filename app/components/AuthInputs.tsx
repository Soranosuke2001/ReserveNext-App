import { FC } from "react";

interface AuthInputsProps {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

const AuthInputs: FC<AuthInputsProps> = ({
  inputs,
  handleChangeInput,
  isSignIn,
}) => {
  const { firstName, lastName, email, phone, city, password } = inputs;

  return (
    <>
      <div className="my-3 flex justify-between text-sm">
        {!isSignIn ? (
          <>
            <input
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => handleChangeInput(e)}
            />
            <input
              type="text"
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => handleChangeInput(e)}
            />
          </>
        ) : null}
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      {!isSignIn ? (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => handleChangeInput(e)}
          />
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="City"
            name="city"
            value={city}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      ) : null}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
    </>
  );
};

export default AuthInputs;
