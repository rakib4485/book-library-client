import { useState, useEffect } from 'react';

const TimeCounter = ({ offerEndTime }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function getTimeLeft() {
    const totalSeconds = Math.floor((new Date(offerEndTime) - new Date()) / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex justify-center my-4">
      <div className="text-center">
        <div className="text-4xl font-bold bg-yellow-600 p-3 rounded-md">{timeLeft.days}</div>
        <div className="text-md font-semibold uppercase text-white">Days</div>
      </div>
      <div className="text-center mx-4">
        <div className="text-4xl font-bold bg-yellow-600 p-3 rounded-md">{timeLeft.hours}</div>
        <div className="text-md font-semibold uppercase text-white">Hours</div>
      </div>
      <div className="text-center mx-4">
        <div className="text-4xl font-bold bg-yellow-600 p-3 rounded-md">{timeLeft.minutes}</div>
        <div className="text-md font-semibold uppercase text-white">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold bg-yellow-600 p-3 rounded-md">{timeLeft.seconds}</div>
        <div className="text-md font-semibold uppercase text-white">Seconds</div>
      </div>
    </div>
  );
};

export default TimeCounter;
