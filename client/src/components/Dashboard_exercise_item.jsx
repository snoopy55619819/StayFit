import { React } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/Dashboard_exercise_list_item.scss'
import useDashboardListItemData from "../hooks/useDashboardListItemData";

export default function DashboardExerciseListItem(props) {
  const { workoutObj, onChange } = props;

  const {
    name,
    duration,
    sets,
    reps,
    weight,
    is_completed,
  } = workoutObj;

  const {
    localCompleted,
    onClickHandler
  } = useDashboardListItemData(is_completed, onChange)

  return (
    <div className="db-card">

      <div className="db-container">
        <h2 className="db-exercise-name">{name}</h2>

        <div className="db-exercise-info">
          <div className="db-exercise-data">

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

          <div className="db-completed-button">
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

            {!localCompleted && <div className="mark-completed-text-calender">Done?</div> }
            {localCompleted && <div className="mark-completed-text-calender">Good job!</div> }
            
          </div>
        </div>
      </div>
    </div>
  );
}
