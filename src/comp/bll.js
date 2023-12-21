import React, { useState } from 'react';

const Bll = () => {
  const [incr, setIncr] = useState(0);

  function incre() {
    setIncr(incr + 1);
  }

  return (
    <div>
        <h1>hooi</h1>
      <h1 onClick={incre}>{setIncr} +</h1>
      <h1>{setIncr}</h1>
    </div>
  );
}

export default Bll;



// console.log(""Start"");
// setInterval(function() {
// console.log(""Outer Interval"");
// setInterval(function() {
// console.log(""Inner Interval"");
// }, 1000);
// }, 1000);
// console.log(""End"");
// Shreshth Mishra9:14 PM
// The bell icon/ notification icon should have a visual indicator, such as a small red dot, that appears when there is a new notification. The user should be able to click the bell icon to toggle the visibility of the new notification indicator. Moreover, you are expected to increase the number of notifications based on the number of clicks of the user on the notification bell

// UI Reference- https://drive.google.com/file/d/1efUQeg2uNjMgR2BSD_Tm2tk1G3OZFbc3/view?usp=sharing
// Shreshth Mishra9:33 PM
// https://codesandbox.io/s/f3-mock-5-34wfq4
// Add an input for setting a reminder.Capture the reminder time and stores it with the task.When a task with a reminder is added, setReminder computes the difference between the current time and the reminder time, and sets a timeout to notify the user.initializeReminders goes through all the tasks on application start and sets reminders for any tasks that have them and are still upcoming.
// Shreshth Mishra9:39 PM
// Add a new dropdown, dependency, to the task creation UI. It will be populated with all the current incomplete tasks. When creating a new task, you can set a dependency.The task data structure now has a new field, dependency, which will store the ID of the task it is dependent on (if any).When trying to mark a task as complete, the app should check if it has any dependency. If it does, the app should now check if the dependent task is complete. If it's not, the user will be alerted.
// Shreshth Mishra9:48 PM
// "Predict the output
// async function getData() {
// return await Promise.resolve('Successfully completed!');
// }
// const data = getData();
// console.log(data);”
// "In the provided JavaScript code snippet, there are two nested setInterval functions with the same time interval of 1000 milliseconds. Describe the output pattern that you would expect to see in the console when this code is executed.
// console.log(""Start"");
// setInterval(function() {
// console.log(""Outer Interval"");
// setInterval(function() {
// console.log(""Inner Interval"");
// }, 1000);
// }, 1000);
// console.log(""End"");
// ”
// Shreshth Mishra9:50 PM
// n the provided JavaScript code snippet, there are two nested setInterval functions with the same time interval of 1000 milliseconds. Describe the output pattern that you would expect to see in the console when this code is executed.
// console.log(""Start"");
// setInterval(function() {
// console.log(""Outer Interval"");
// setInterval(function() {
// console.log(""Inner Interval"");
// }, 1000);
// }, 1000);
// console.log(""End"");
// You were asked to create to the search functionality in your youtube clone which is as follows:Search Functionality- On Searching for a video we receive a list of videos this API will drive the same where we send the search String to Youtube’s API and it sends the list of videos as per our search.Now, based on it, I want that user's search history is stored in the session storage or local storage as key value pair like "Search 1: Harry". Explain the process of executing this functionality
// Shreshth Mishra9:52 PM
// How does error handling differ in Promise chaining compared to traditional callback-based asynchronous operations?
// Describe the differences between first-party cookies and third-party cookies.
// weg-ycrs-yib