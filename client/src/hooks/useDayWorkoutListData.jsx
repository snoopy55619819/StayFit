import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { authContext } from '../providers/AuthProvider';

function useDayWorkoutListData(selectedDate) {
  const { user } = useContext(authContext);
  const [dayExercises, setDayExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exerciseDeleted, setExerciseDeleted] = useState(false);

  useEffect(() => {
    const updateData = async () => {
      setLoading(true);
      await axios
        .get(`/day-exercises/${user.id}/${selectedDate}`)
        .then((response) => {
          setTimeout(() => {
            setLoading(false);
          }, 500);
          setDayExercises([...response.data]);
        });
    };
    updateData();
  }, [selectedDate, exerciseDeleted, user]);

  const toggleDeleted = () => {
    setExerciseDeleted(!exerciseDeleted);
  };
    
  const persistIsCompleted = async (dayExerciseId) => {
    // Update is_completed status in database
    await axios.patch(`/day-exercises/${dayExerciseId}`, {})
      .then(() => {
        setDayExercises(prev => {
          return prev.map(item => {
            if(item.day_exercise_id === dayExerciseId) {
              item.is_completed = !item.is_completed
            }
            return item;
          })
        })

        let sortedExercises = dayExercises.sort((x, y) => {
          return (x.is_completed === y.is_completed)? 0 : x.is_completed? 1 : -1;
        })
        setDayExercises(sortedExercises)
      })
  };

  return {
    dayExercises,
    loading,
    toggleDeleted,
    persistIsCompleted
  };
}

export default useDayWorkoutListData;