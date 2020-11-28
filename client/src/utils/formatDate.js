const Min = 60 * 1000; // milliseconds in Minute
const Hour = Min * 60; // milliseconds in Hour
const Day = Hour * 24; // milliseconds in day
const Week = Day * 7; // milliseconds in week
const Month = Day * 30; // milliseconds in Month

//.toISOString()
export const formatDate = (date) => {
  const currentDate = new Date();
  const previousDate = new Date(date);

  const diff = currentDate - previousDate; //difference between dates.
  

  if (diff < Min) {
    return Math.round(diff / 1000) + ' seconds ago'; // If the diff is less then milliseconds in a minute
  } else if (diff < Hour) {
    return Math.round(diff / Min) + ' minutes ago'; // If the diff is less then milliseconds in a Hour
  } else if (diff < Day) {
    return Math.round(diff / Hour) + ' hours ago'; // If the diff is less then milliseconds in a day
  } else if (diff < Week) {
    return Math.round(diff / Day) + ' days ago'; // If the diff is less then milliseconds in a Week
  } else if (diff < Month) {
    return Math.round(diff / Week) + ' weeks ago'; // If the diff is less then milliseconds in a Month
  } else if (diff > Month) {
    return formatDateMD(previousDate);
  } else {
    return formatDateMDY(previousDate);
  }
};

//const dateString = '2020-11-18T16:47:25.236+00:00';

const formatDateMD = (dateString) => {
  // Example: November 18
  const options = { month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const formatDateMDY = (dateString) => {
  // Example: November 18, 2020
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
