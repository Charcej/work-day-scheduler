// This is for discovering today's day, month and year with Moment.js
var todaysDate = moment().format('dddd, MMMM Do');
// to make sure it's working
console.log(todaysDate);
// This is for displaying 'todayDate' on the page, inside p element, with id of "currentDay" (with jQuery)
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    // this is to set up a click listener for save button targeted by saveBtn class
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description and time of day (with JQuery)
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // This is how to save the text and time associated with it that was entered and saved into local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        // this is how to get the current number in terms of hours
        var timeNow = moment().hour();
        console.log(timeNow)

        // this is so you can loop over the time blocks
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // this is to check the time and then add the classes to set up color
            // first is for if the time is less than now and so in the past (grey)
            if (timeBlock < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
                // this is for is the time is now and so would add background indicator to show it's in the present and adds that bg color (red)
            }
            else if (timeBlock === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            // this is for if any other condition and the only one left would be in the future and so it adds that bg color (green)
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // this is for getting an item from local storage if there is one to get (for every single timeblock)
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // for calling the timeTracker function which gets the time in hours
    timeTracker();
})



