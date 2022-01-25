// This is for discovering today's day, month and year with Moment.js
var todaysDate = moment().format('dddd, MMMM Do');
// to make sure it's working
console.log(todaysDate);
// This is for displaying the variable for 'todayDate' on the page inside p element with id of "currentDay" with jQuery
$("#currentDay").html(todaysDate);