import React from "react";
import "../styles/WeeklyCalender.scss";
import { getDays } from "../helpers/calenderHelpers";

export default function WeeklyCalender(props) {
  const { currDate, onClick, onClose } = props;
  const {
    day1,
    day2,
    day4,
    day5,
    day1Info,
    day2Info,
    day3Info,
    day4Info,
    day5Info
  } = getDays(currDate);
  
  return (
    <section className="weekCalenderContainer">
      <article
        className="weekDay"
        onClick={() => {
          onClose();
          onClick(day1);
        }}
      >
        <div>{day1Info[2]}</div> <div> {day1Info[0]}</div>
      </article>

      <article
        className="weekDay"
        onClick={() => {
          onClose();
          onClick(day2);
        }}
      >
        <div>{day2Info[2]}</div> <div> {day2Info[0]}</div>
      </article>

      <article className="selected">
        <div>{day3Info[2]}</div> <div> {day3Info[0]}</div>
      </article>

      <article
        className="weekDay"
        onClick={() => {
          onClose();
          onClick(day4);
        }}
      >
        <div>{day4Info[2]}</div> <div> {day4Info[0]}</div>
      </article>

      <article
        className="weekDay"
        onClick={() => {
          onClose();
          onClick(day5);
        }}
      >
        <div>{day5Info[2]}</div> <div> {day5Info[0]}</div>
      </article>
    </section>
  );
}
