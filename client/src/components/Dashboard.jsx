import React from "react";
import DashboardExerciseList from "./Dashboard_exercise_list";
import "../styles/Dashboard.scss";
import { formatedDate } from "../helpers/dashboardHelpers";

export default function Dashboard(props) {
  const {quotes} = props;
  
  //weather api data======
  const weather = props.todayWeather
  const temperatureInCelsius = Math.round(weather.main.temp)
  const { icon } = weather.weather['0']
  const iconurl = `http://openweathermap.org/img/w/${icon}.png`;
  //=========**=====

  const randomQuote = Math.floor((Math.random() * 6));

  return (
    <div className="container-dashboard">
          <h2 className="dashboard-title">Dashboard</h2>
      <div className="heading-container">
        <div className="weather">
          <img src={`${iconurl}`} alt=""/>
          {temperatureInCelsius}&#8451; {weather.name}
        </div>
        <div>
          <h2 className="dashboard-date">{formatedDate()}</h2>
        </div>
      </div>
      <section className="container-quote">
        <div className="quote-data" >{quotes[randomQuote].quote}</div>
        <div className="quote-author" >
          <div>- {quotes[randomQuote].author}</div>
        </div>
      </section>

      <div className="db-titles">
        <h3> Today's Exercises:</h3>
      </div>

      <DashboardExerciseList />
    </div>
  );
}
