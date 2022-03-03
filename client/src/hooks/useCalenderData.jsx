import { useState, useEffect } from "react";

function useCalenderData() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddForm, setShowAddForm] = useState(false);
  const [editExerciseObj, setEditExerciseObj] = useState({});

    useEffect(() => {
      setEditExerciseObj({});
    }, [selectedDate]);
    
    return {
      selectedDate,
      setSelectedDate,
      showAddForm,
      setShowAddForm,
      editExerciseObj,
      setEditExerciseObj
    };
}

export default useCalenderData;