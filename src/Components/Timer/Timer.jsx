import React, { useEffect, useState } from "react";
import "./timer.css";
import { motion } from "framer-motion";

function Timer() {
  const [targetTime, setTargetTime] = useState("01/01/2024");
  const [totalSecondDif, setTotalSecondDif] = useState(0);
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const calcCurrentTime = () => {
    const currentTime = new Date();
    const fullTime = {
      currentYear: currentTime.getFullYear(),
      currentMonth: currentTime.getMonth() + 1,
      currentDay: currentTime.getDate(),
      currentHour: currentTime.getHours(),
      currentMinute: currentTime.getMinutes(),
      currentSecond: currentTime.getSeconds(),
    };

    return fullTime;
  };

  const calcTimeDif = (currentTime) => {
    const targetTimeItems = targetTime.split("/");

    // not included today
    let totalSecondDif =
      (targetTimeItems[0] - currentTime.currentMonth) * 30 * 24 * 60 * 60 +
      (targetTimeItems[1] - currentTime.currentDay) * 24 * 60 * 60 +
      (targetTimeItems[2] - currentTime.currentYear) * 12 * 30 * 24 * 60 * 60;

    //included today
    totalSecondDif -=
      currentTime.currentHour * 60 * 60 +
      currentTime.currentMinute * 60 +
      currentTime.currentSecond;

    setTotalSecondDif(totalSecondDif);
  };

  const handleTimerValue = (totalSecondDif) => {
    //calc
    let days = Math.floor(totalSecondDif / (60 * 60 * 24));
    totalSecondDif -= days * 60 * 60 * 24;
    let hours = Math.floor(totalSecondDif / (60 * 60));
    totalSecondDif -= hours * 60 * 60;
    let minutes = Math.floor(totalSecondDif / 60);
    totalSecondDif -= minutes * 60;
    let seconds = totalSecondDif;

    setDays(formatTwoDigit(days));
    setHours(formatTwoDigit(hours));
    setMinutes(formatTwoDigit(minutes));
    setSeconds(formatTwoDigit(seconds));
  };

  const formatTwoDigit = (number) => {
    if (number < 10) {
      return "0" + number;
    } else return number;
  };

  useEffect(() => {
    const currentTime = calcCurrentTime();
    calcTimeDif(currentTime);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTotalSecondDif((prev) => prev - 1);
      handleTimerValue(totalSecondDif);
    }, 1000);

    return () => clearInterval(intervalId)
  }, [totalSecondDif]);

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      className="timer"
    >
      <div className="timerBox">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="timerBoxCard"
        >
          <div className="timerBoxCardBlackOut"></div>
          <div className="timerBoxCardLeftRound"></div>
          <div className="timerBoxCardRightRound"></div>
          <h1 className="timerBoxCardValue">{days}</h1>
        </motion.div>
        <h2 className="timerBoxTitle">DAYS</h2>
      </div>
      <div className="timerBox">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="timerBoxCard"
        >
          <div className="timerBoxCardBlackOut"></div>
          <div className="timerBoxCardLeftRound"></div>
          <div className="timerBoxCardRightRound"></div>
          <h1 className="timerBoxCardValue">{hours}</h1>
        </motion.div>
        <h2 className="timerBoxTitle">HOURS</h2>
      </div>
      <div className="timerBox">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="timerBoxCard"
        >
          <div className="timerBoxCardBlackOut"></div>
          <div className="timerBoxCardLeftRound"></div>
          <div className="timerBoxCardRightRound"></div>
          <h1 className="timerBoxCardValue">{minutes}</h1>
        </motion.div>
        <h2 className="timerBoxTitle">MINUTES</h2>
      </div>
      <div className="timerBox">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="timerBoxCard"
        >
          <div className="timerBoxCardBlackOut"></div>
          <div className="timerBoxCardLeftRound"></div>
          <div className="timerBoxCardRightRound"></div>
          <h1 className="timerBoxCardValue">{seconds}</h1>
        </motion.div>
        <h2 className="timerBoxTitle">SECONDS</h2>
      </div>
    </motion.div>
  );
}

export default Timer;
