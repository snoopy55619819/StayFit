import { React } from "react";
import DayWorkoutListItem from "./Day_workout_list_item";
import EmptyDayExercises from "./EmptyDayExercises";
import "../styles/Day_workout_list.scss";
import Fab from "@mui/material/Fab";
import AddIcon from "@material-ui/icons/Add";
import CircularIndeterminate from "../global-components/Loading";
import useDayWorkoutListData from "../hooks/useDayWorkoutListData";
import { isPast } from "../helpers/calenderHelpers";

export default function DayWorkoutList(props) {
  const selectedDate = props.selectedDate.toDateString();
  const { setEditObj } = props;

  const {
    dayExercises,
    loading,
    toggleDeleted,
    persistIsCompleted
  } = useDayWorkoutListData(selectedDate);

  const exerciseItems = dayExercises.map((exercise) => (
    <DayWorkoutListItem
      key={exercise.id}
      workoutObj={exercise}
      onChange={() => persistIsCompleted(exercise.day_exercise_id)}
      onEditClick={() => setEditObj(exercise)}
      toggleDeleted={toggleDeleted}
    />
  ));

  return (
    <div className="exercises-container">
      { !isPast(props.selectedDate) &&
        <Fab
          style={{ background: "#ffc600" }}
          aria-label="add"
          className="add-new-exercise"
          onClick={props.onClick(true)}
        >
          <AddIcon />
        </Fab>
      }
      {exerciseItems.length > 0 && !loading && exerciseItems}
      {exerciseItems.length === 0 && !loading && <EmptyDayExercises />}
      {loading && 
      <div className="loading-circle">
        <CircularIndeterminate/>
      </div>
      }
    </div>
  );
}
