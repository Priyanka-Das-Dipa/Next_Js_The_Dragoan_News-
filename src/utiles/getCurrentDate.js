export function getCurrentDate() {
  // Create an array to store the names of the months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Create an array to store the names of the days of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current date
  const currentDate = new Date();

  // Extract the day, month, day of the week, and year
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const year = currentDate.getFullYear();

  // Display the information
  return `${dayOfWeek}, ${month} ${day}, ${year}`;
}

// Call the function to display the current date
//   displayCurrentDate();
