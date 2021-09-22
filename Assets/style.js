//Use moment.js to get today's date and display in currentDay element
var currentDay = moment().format("dddd, Do MMMM, YYYY");
$("#currentDay").text("Today is " + currentDay);

//insert hours into timeText element
var workHours= [9,10,11,12,13,14,15,16,17]; //24 hour format
var i = 0;

//Get current hour with moment.js 
var currentHour = moment().hour();

$(".time-block").each(function () { //working now

    var timeBlockTime = $(this).attr("id"); //get id of timeblock and compare
    if (timeBlockTime < currentHour) {
        $(this).addClass("past");

    }   else if (timeBlockTime > currentHour) {
        $(this).addClass("future");
    }   else {//if current hour
        $(this).addClass("present");
}
})

// add 1 workhour index to each instance of timeText, check if index is over or under 12
$(".timeText").each(function() {
    //check if current work hour is over twelve to change to pm
    if (workHours[i] >= 12) {
        $(this).text((workHours[i]-12) + " pm");
        console.log((workHours[i]-12) + " pm");
        //fix 0 pm issue
        if (workHours[i] === 12 && workHours[i] < workHours[8]) {
            $(this).html((workHours[i]) + "<br> Noon"); //brakeline added to format properly
        console.log((workHours[i]) + " pm");
        }
    } else { //if under 12 it will be am
        $(this).text(workHours[i] + " am");
        console.log(workHours[i] + " am");
    }
    workHours[i]++;
})

//Save button saves text to local storage, uses time-block id as 
$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var timeId = $(this).parent().attr("id");
    var content = $(this).siblings(".description").val();

    localStorage.setItem(timeId, content);
});

/*$("id").each(function() {
        var time = $(this).parent().attr("id");
        var content = $(this).siblings(".description");
        content.val(localStorage.getItem(time));
})*/

//Retrieve saved content and display in each textarea of each id
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));