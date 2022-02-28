import React from "react";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";
import './Application.scss';
import '../../App.scss';

export default function Application() {
  const exerciseList = ["Body Parts", "Muscles"];
  const showBodyPart = false;
  const showMuscles = false;

  const navigate = useNavigate();

  const onExerciseSelection = (name) => {
    navigate(`/exercises/${name}`);
  };

  return (
    <div className="application">
      {!showBodyPart && !showMuscles && (
        <ItemList
          header="List of Exercises"
          exerciseList={exerciseList}
          onClick={onExerciseSelection}
        />
      )}
    </div>
  );
}
