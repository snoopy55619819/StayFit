import { useState } from "react";

function useDashboardListItemData(is_completed, onChange) {
  const [localCompleted, setLocalCompleted] = useState(is_completed);

  const onClickHandler = () => {
    setLocalCompleted(!localCompleted);
    onChange();
  };

  return {
    localCompleted,
    onClickHandler
  };
}

export default useDashboardListItemData;