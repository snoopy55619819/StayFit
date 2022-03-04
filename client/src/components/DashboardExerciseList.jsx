import { React } from "react";
import EmptyDayExercises from "./EmptyDayExercises";
import CircularIndeterminate from "../global-components/Loading";
import DashboardExerciseListItem from "./DashboardExerciseListItem";
import "../styles/DashboardExerciseList.scss";
import useDashboardListData from "../hooks/useDashboardListData";

export default function DashboardExerciseList() {
  const {
    dayExercises,
    loading,
    persistIsCompleted
  } = useDashboardListData();

  const exerciseItems = dayExercises.map((exercise) => (
    <DashboardExerciseListItem
      key={exercise.id}
      workoutObj={exercise}
      onChange={() => persistIsCompleted(exercise.day_exercise_id)}
    />
  ));

  return (
    <div className="dashboard-exercises-container">
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
