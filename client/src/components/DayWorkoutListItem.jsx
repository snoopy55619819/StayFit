import { React } from "react";
import {
  faTrashCan,
  faPenToSquare,
  faCircleInfo,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/DayWorkoutListItem.scss";
import DeletePopup from "./popup/DeletePopup";
import "./popup/popup.scss";
import useDayListItemData from "../hooks/useDayListItemData";

export default function DayWorkoutListItem(props) {
  const { workoutObj, onChange, onEditClick, toggleDeleted } = props;

  const {
    name,
    duration,
    sets,
    reps,
    weight,
    is_completed,
    day_exercise_id,
    exercise_id,
    recurring_monday,
    recurring_tuesday,
    recurring_wednesday,
    recurring_thursday,
    recurring_friday,
    recurring_saturday,
    recurring_sunday,
  } = workoutObj;

  const isRecurring =
    recurring_monday ||
    recurring_tuesday ||
    recurring_wednesday ||
    recurring_thursday ||
    recurring_friday ||
    recurring_saturday ||
    recurring_sunday;

  const {
    localCompleted,
    isOpen,
    onClickHandler,
    togglePopup,
    onSingleDelete,
    onAllDelete
  } = useDayListItemData(is_completed, onChange, day_exercise_id, exercise_id, toggleDeleted);
  
  return (
    <div className="card">
      {isOpen && (
        <DeletePopup
          handleClose={togglePopup}
          onSingleDelete={onSingleDelete}
          onAllDelete={onAllDelete}
          isRecurring={isRecurring}
        />
      )}
      <div className="multi-button">
        <button className="fas fa-trash" onClick={() => togglePopup()}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <button className="fas fa-edit" onClick={onEditClick}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className="fas fa-view"
          onClick={() => console.log("View info clicked")}
        >
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
      </div>

      <div className="container">
        <h2 className="exercise-name-calender">{name}</h2>

        <div className="exercise-info">
          <div className="exercise-data">

            {weight > 0 && (
              <div>
                Weight: <div>{weight} lbs</div>
              </div>
            )}
            {sets > 0 && (
              <div>
                Sets: <div>{sets}</div>
              </div>
            )}
            {reps > 0 && (
              <div>
                Reps: <div>{reps}</div>
              </div>
            )}
            {duration > 0 && (
              <div>
                Time: <div>{duration} min</div>
              </div>
            )}

          </div>

          <div className="exercise-not-completed-button">

            <input
              type="checkbox"
              id="demo"
              checked={localCompleted}
              onChange={() => 1}
            />
            <label htmlFor="demo">
              <button id="btnbtn" onClick={onClickHandler}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </label>
            {!localCompleted && <div className="mark-completed-text-calender">Did you finish this?</div> }
            {localCompleted && <div className="mark-completed-text-calender">Good job!</div> }
            
          </div>
        </div>
      </div>
    </div>
  );
}
