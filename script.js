console.log("ready for code!");

//when the user opens the page, I want the different rows to correspond to the current time (use moment.js)

//break down into the smallest parts that you can


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
$(document).ready(function () {
    // THEN the current day is displayed at the top of the calendar
    const today = moment();
    $("#currentDay").append(today.format('dddd, MMMM Do YYYY, h:mm a'))
    // WHEN I scroll down
    // THEN I am presented with time blocks for standard business hours
    // WHEN I view the time blocks for that day
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
    var checkTime = function () {
        var currentTime = moment().format('h')
        // console.log(currentTime)
        $("textarea").each(function () {
            var boxtime = $(this).attr("id")
            if (boxtime < currentTime) {
                $(this).addClass("past")
            }
            else if (boxtime > currentTime) {
                $(this).addClass("future")
            }
            else {
                $(this).addClass("present")
            }
        });
    }
    checkTime();
    // WHEN I click into a time block
    // THEN I can enter an event
    // WHEN I click the save button for that time block
    $(".saveBtn").on("click", function () {//use DOM
        var hourNum = $(this).attr("data-hour");
        var savedItems = $("#event" + hourNum).val();
        console.log(savedItems)
        localStorage.setItem('Catalog' + hourNum, savedItems)
        // THEN the text for that event is saved in local storage
    })

    // WHEN I refresh the page
    // THEN the saved events persist
    for (var i = 9; i < 18; i++) {
        $("#event" + i).val(localStorage.getItem('Catalog' + i));
    }


})
