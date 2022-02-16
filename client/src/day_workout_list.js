import { React, useState, useEffect } from 'react';
import DayWorkoutListItem from './day_workout_list_item';
import EmptyDayExercises from './components/EmptyDayExercises';
import './scss/day_workout_list.scss'
import axios from 'axios';
import Fab from "@mui/material/Fab";
import AddIcon from '@material-ui/icons/Add';

const workoutObjs = [
  {
    id: 1,
    name: "push-up",
    type: "upper body",
    duration: null,
    sets: 5,
    reps: 10,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 2,
    name: "sit-up",
    type: "core",
    duration: null,
    sets: 5,
    reps: 10,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 3,
    name: "squats",
    type: "lower body",
    duration: null,
    sets: 5,
    reps: 10,
    weight: 150,
    is_completed: false,
    date: "today",
  },
  {
    id: 4,
    name: "Sprints",
    type: "cardio",
    duration: 10,
    sets: 5,
    reps: 1,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 5,
    name: "jog",
    type: "cardio",
    duration: 10,
    sets: 2,
    reps: 1,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 6,
    name: "push-up",
    type: "upper body",
    duration: null,
    sets: 5,
    reps: 10,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 7,
    name: "sit-up",
    type: "core",
    duration: null,
    sets: 5,
    reps: 10,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 8,
    name: "squats",
    type: "lower body",
    duration: null,
    sets: 5,
    reps: 10,
    weight: 150,
    is_completed: false,
    date: "today",
  },
  {
    id: 9,
    name: "Sprints",
    type: "cardio",
    duration: 10,
    sets: 5,
    reps: 1,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 10,
    name: "jog",
    type: "cardio",
    duration: 10,
    sets: 2,
    reps: 1,
    weight: 100,
    is_completed: false,
    date: "today",
  },
];

export default function DayWorkoutList(props) {

  const selectedDate = props.selectedDate.toDateString() 
  const [dayExercises, setDayExercises] = useState([]);

  const userid = 1;

  useEffect(() => {
    axios.get(`http://localhost:8080/day-exercises/${userid}/${selectedDate}`)
      .then(response => {
        setDayExercises([...response.data])
      })
    } 
  ,[selectedDate]);
    
    const persistIsCompleted = async (dayExerciseId, is_completed) => {
      // talk with groupmates to make HTTP call same in backend
      await axios.patch(`http://localhost:8080/day-exercises/${dayExerciseId}`, {})
      // await axios({
      //   method: 'patch',
      //   url: `http://localhost:8080/day-exercises/:${dayExerciseId}`,
      //   data: {}
      // });

      // approach 1
      await axios.get(`http://localhost:8080/day-exercises/${userid}/${selectedDate}`)
      .then(response => {
        setDayExercises([...response.data])
      })
      return;
    }

  const exerciseItems = dayExercises.map(exercise => 
    <DayWorkoutListItem 
      key={exercise.id}
      workoutObj={exercise}
      onChange={() => persistIsCompleted(exercise.id)} 
    />
  )

  return (
    <div className="exercises-container">
      { exerciseItems}
      { exerciseItems.length === 0 && <EmptyDayExercises /> }
      <Fab color="primary" aria-label="add" className="add-new-exercise">
        <AddIcon />
      </Fab>
    </div>
  );
}