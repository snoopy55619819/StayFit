import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/exerciseSearch/ItemList";
import { useNavigate } from "react-router-dom";

const Exercises = () => {
  let params = useParams();
  let part = params.part;
  // let muscleName = searchParams.get("target");
  // let bodyPartName = searchParams.get("bodyPart");
  const bodyPartsList = [
    "Back",
    "Cardio",
    "Chest",
    "Lower Arms",
    "Lower Legs",
    "Neck",
    "Shoulders",
    "Upper Arms",
    "Upper Legs",
    "Waist",
  ];
  const musclesList = [
    "Abductors",
    "Abs",
    "Adductors",
    "Biceps",
    "Calves",
    "Cardiovascular System",
    "Delts",
    "Forearms",
    "Glutes",
    "Hamstrings",
    "Lats",
    "Levator Scapulae",
    "Pectorals",
    "Quads",
    "Serratus Anterior",
    "Spine",
    "Traps",
    "Triceps",
    "Upper back",
  ];
  const parts = { Muscles: musclesList, "Body Parts": bodyPartsList };
  const header = { Muscles: "Muscles", "Body Parts": "Body Parts" };
  const navigate = useNavigate();
  const onPartNameSelection = (name) => {
    navigate(`/exercises/${part}/exercise/${name}`);
  };

  return (
    <div>
      <ItemList
        header={header[part]}
        exerciseList={parts[part]}
        onClick={onPartNameSelection}
      />
    </div>
  );
};

export default Exercises;
