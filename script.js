//when the user opens the page, I want the different rows to correspond to the current time (use moment.js)

//break down into the smallest parts that you can





// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
$(document).ready(function () {
    console.log("ready!");
    const today = moment();
    console.log("Today's date is: " + today.format('dddd, MMMM Do YYYY, h:mm:ss a', true))
    $("#currentDay").append(today.format('dddd, MMMM Do YYYY, h:mm:ss a'))

    // WHEN I scroll down
    // TODO: THEN I am presented with time blocks for standard business hours

    // TODO: WHEN I view the time blocks for that day
    // TODO: THEN each time block is color-coded to indicate whether it is in the past, present, or future
    $(".timeblock").attr()
    $(".row").css({ "background-color": "gray" }) //if past
    $(".row").css({ "background-color": "red" }) //if present
    $(".row").css({ "background-color": "chartreuse" }) //if future
    // TODO: WHEN I click into a time block
    // TODO: THEN I can enter an event
    // TODO: WHEN I click the save button for that time block
    // TODO: THEN the text for that event is saved in local storage
    // TODO: WHEN I refresh the page
})
// TODO: THEN the saved events persist