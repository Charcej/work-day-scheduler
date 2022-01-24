// This is for discovering today's day, month and year and consoling it with Moment.js
var todaysDate = moment().format('dddd, MMMM Do');
console.log(todaysDate);
// This is for displaying the variable for 'todayDate' on the page inside p element with id of "currentDay" with jQuery
$("#currentDay").html(todaysDate);

