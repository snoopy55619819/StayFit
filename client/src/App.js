import { React, useState, useContext } from "react";
import Dashboard from "./components/Dashboard";
import Calender from "./components/Calender";
import "./App.scss";
import Application from "./components/exerciseSearch/Application";
import { Routes, Route } from "react-router-dom";
import Exercises from "./pages/Exercises";
import Exercise from "./pages/Exercise";
import Footer from "./global-components/Footer";
import Header from "./global-components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { authContext } from "./providers/AuthProvider";
import useExercisesData from "./hooks/useExercisesData";
import useQuotes from "./hooks/useQuotes";
import useWeather from "./hooks/useWeather";
import About from "./about/About";
import Stack from "./about/Stack";

//temporarty data- this data will be fetched from API call
const exercises = [
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    name: "3/4 sit-up",
    target: "abs",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
    id: "0002",
    name: "45° side bend",
    target: "abs",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
    id: "1512",
    name: "all fours squad stretch",
    target: "quads",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
    id: "0007",
    name: "alternate lateral pulldown",
    target: "lats",
  },
  {
    bodyPart: "lower legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
    id: "1368",
    name: "ankle circles",
    target: "calves",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    id: "3293",
    name: "archer pull up",
    target: "lats",
  },
];
const todayWeather = {
  coord: {
    lon: -79.4163,
    lat: 43.7001,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d", //"04n"
    },
  ],
  base: "stations",
  main: {
    temp: 37.67,
    feels_like: 37.67,
    temp_min: 36.36,
    temp_max: 42.19,
    pressure: 1022,
    humidity: 54,
  },
  visibility: 10000,
  wind: {
    speed: 16.11,
    deg: 70,
  },
  clouds: {
    all: 0,
  },
  dt: 1645472884,
  sys: {
    type: 1,
    id: 718,
    country: "CA", //
    sunrise: 1645445250,
    sunset: 1645484124,
  },
  timezone: -18000,
  id: 6167865,
  name: "Toronto",
  cod: 200,
};

function App() {
  const { auth } = useContext(authContext);
  const [show, setShow] = useState("LOGIN");
  const { quotes } = useQuotes();
  //const { exercises } = useExercisesData()
  //const { todayWeather } = useWeather();

  const showLogin = () => {
    setShow("LOGIN");
  };

  const showSignup = () => {
    setShow("SIGNUP");
  };

  return (
    <div className="App">
      {!auth && show === "LOGIN" && <Login showSignup={showSignup} />}
      {!auth && show === "SIGNUP" && <Signup showLogin={showLogin} />}

      {auth && (
        <>
          <div className="header">
            <Header />
          </div>
          <div className="routes">
            <Routes>
              {/* <Route path="/" element={<Dashboard/>} /> */}
              {/* rn - not working */}
              <Route
                exact
                path="/"
                element={
                  <Dashboard quotes={quotes} todayWeather={todayWeather} />
                }
              />
              <Route
                exact
                path="/calender"
                element={<Calender exercises={exercises} />}
              />
              {/* change path to /calender; once get Dashboard working */}
              <Route exact path="/exerciseCategory" element={<Application />} />
              <Route exact path="/exercises/:part" element={<Exercises />} />
              <Route
                exact
                path="/exercises/:part/exercise/:name"
                element={<Exercise exercises={exercises} />}
              />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/stack" element={<Stack />} />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
