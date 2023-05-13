"use client";

import { FC, useState } from "react";
import { partySize, times } from "../../../../data";
import DatePicker from "react-datepicker";

interface ReservationProps {
  openTime: string;
  closeTime: string;
}

const Reservation: FC<ReservationProps> = ({ openTime, closeTime }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    if (date) {
      return setSelectedDate(date);
    }

    return setSelectedDate(null);
  };

  const filterTimeList = () => {
    const availableTimes: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }

      if (isWithinWindow) {
        availableTimes.push(time);
      }

      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return availableTimes;
  };

  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">Party Size</label>
        <select name="" className="py-3 border-b font-light" id="">
          {partySize.map((size, index) => (
            <option key={index} value={size.value} className="text-center">
              {size.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="py-3 border-b font-light text-reg"
            dateFormat="MMMM d"
            wrapperClassName="w-[48%]"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select name="" className="py-3 border-b font-light" id="">
            {filterTimeList().map((time) => (
              <option value={time.time}>{time.displayTime}</option>
            ))}
            <option value="">8:30 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Find a Time
        </button>
      </div>
    </div>
  );
};

export default Reservation;
