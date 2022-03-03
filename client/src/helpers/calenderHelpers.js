//function to check if the selected date is today
export const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

//function to check if the selected date is in the past
export const isPast = (someDate) => 
someDate.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);


// Function to create calender dates based on selected dates.
//  Return data for 2 prior dates, selected date and next dates.
export const getDays = (currDate) => {
  const day1 = new Date(currDate);
  const day2 = new Date(currDate);
  const day3 = new Date(currDate);
  const day4 = new Date(currDate);
  const day5 = new Date(currDate);

  day1.setDate(day1.getDate() - 2);
  day2.setDate(day2.getDate() - 1);
  day4.setDate(day4.getDate() + 1);
  day5.setDate(day5.getDate() + 2);

  const day1Info = day1.toDateString().split(" ");
  const day2Info = day2.toDateString().split(" ");
  const day3Info = day3.toDateString().split(" ");
  const day4Info = day4.toDateString().split(" ");
  const day5Info = day5.toDateString().split(" ");

  return {
    day1,
    day2,
    day3,
    day4,
    day5,
    day1Info,
    day2Info,
    day3Info,
    day4Info,
    day5Info
  }
};


