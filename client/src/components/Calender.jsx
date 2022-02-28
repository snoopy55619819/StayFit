import { React, useEffect, useState } from "react";
import DayWorkoutList from "./Day_workout_list";
import WeeklyCalender from "./WeeklyCalender";
import AddForm from "../global-components/AddForm";
import EditForm from "../global-components/EditForm";
import "../styles/Calender.scss";
import Fab from "@mui/material/Fab";

export default function Calender(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddForm, setShowAddForm] = useState(false);
  const [editExerciseObj, setEditExerciseObj] = useState({});

  useEffect(() => {
    setEditExerciseObj({});
  }, [selectedDate]);

  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  };

  const splitDate = selectedDate.toDateString().split(" ");
  return (
    <div className="calender-container">
      <div className="calender-information">
        <h2 className="date">
          {splitDate[1]} {splitDate[2]}{" "}
        </h2>
        {!isToday(selectedDate) && (
          <Fab variant="extended" onClick={() => setSelectedDate(new Date())}>
            Today
          </Fab>
        )}
      </div>

      <WeeklyCalender
        currDate={selectedDate}
        onClick={setSelectedDate}
        onClose={() => setShowAddForm(false)}
      />
      {!showAddForm && Object.keys(editExerciseObj).length === 0 && (
        <DayWorkoutList
          selectedDate={selectedDate}
          onClick={() => setShowAddForm}
          // onEditClick={() => setShowEditForm}
          setEditObj={setEditExerciseObj}
        />
      )}

      {showAddForm && (
        <AddForm
          exercises={props.exercises}
          date={selectedDate.toDateString()}
          onSubmit={() => setShowAddForm(false)}
          onClose={() => setShowAddForm(false)}
        />
      )}

      {Object.keys(editExerciseObj).length > 0 && (
        <EditForm
          key={editExerciseObj.id}
          {...editExerciseObj}
          onClose={() => setEditExerciseObj({})}
        />
      )}
    </div>
  );
}
