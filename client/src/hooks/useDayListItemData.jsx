import { useState } from "react";
import axios from "axios";

function useDayListItemData(is_completed, onChange, day_exercise_id, exercise_id, toggleDeleted) {
  const [localCompleted, setLocalCompleted] = useState(is_completed);
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setLocalCompleted(!localCompleted);
    onChange();
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const onSingleDelete = async () => {
    await axios
      .patch(`/exercises/${day_exercise_id}`)
      .then(() => {
        toggleDeleted();
        togglePopup();
      });
  };
  const onAllDelete = async () => {
    await axios
      .delete(`/exercises/${exercise_id}`)
      .then(() => {
        toggleDeleted();
        togglePopup();
      });
  };

  return {
    localCompleted,
    isOpen,
    onClickHandler,
    togglePopup,
    onSingleDelete,
    onAllDelete
  };
}

export default useDayListItemData;