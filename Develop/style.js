//Use moment.js to get today's date and display in currentDay element
var currentDay = moment().format("dddd, Do MMMM, YYYY");
$("#currentDay").text("Today is " + currentDay);

//current events are red, future events are green, past events are grey


currentHour = moment().format("H"); //in 24 hour format
console.log("The current hour is " + currentHour);

//set start and end times

if (currentHour > 12) {
    $("#timeText").text((currentHour-12) + " pm");
    console.log(currentHour-12);
} else {
    $("#timeText").text(currentHour + " am");
}

//get difference of start time and end time and create for loop that creates 3 sections for each hour