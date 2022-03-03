// Format todays date to output to screen.
export const formatedDate = () => {
  const today = new Date();
  const splitDate = today.toDateString().split(' ');
  return `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`;
}