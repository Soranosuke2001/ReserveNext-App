import { FC } from "react";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First Name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last Name"
      />
      <input
        type="number"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone Number"
      />
      <input
        type="email"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Email"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Occasion (Optional)"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Special Requests (Optional)"
      />
      <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
        Complete Reservation
      </button>
      <p className="mt-4 text-small">
        By clicking &quot;Complete Reservation&quot; you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text messages rate may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
};

export default Form;
