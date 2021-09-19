//Use moment.js to get today's date and display in currentDay element
var currentDay = moment().format("dddd, Do MMMM, YYYY");
$("#currentDay").text("Today is " + currentDay);

//I can just do this for hour instead
//currentHour = moment().hour();
//console.log(currentHour);

//use moment.js values for hours and compare them 
var currentHour = moment().hour();
var startHour = moment().hour(8);
var endHour = moment().hour(24);

$(".time-block").each(function () { //not working atm, showing all green
    if (startHour < currentHour) {
        $(".time-block").addClass("past");
        $(".time-block").removeClass("future");
        $(".time-block").removeClass("present");

    }   else if (endHour > currentHour) {
        $(".time-block").addClass("future");
        $(".time-block").removeClass("past");
        $(".time-block").removeClass("present");
    }   else {
        $(".time-block").addClass("present");
        $(".time-block").removeClass("future");
        $(".time-block").removeClass("past");
}
})

//insert hours into timeText element
var workHours= [9,10,11,12,13,14,15,16,17]; //24 hour format
var i = 0;

// add 1 workhour index to each instance of timeText, check if index is over or under 12
$(".timeText").each(function() {
    //check if current work hour is over twelve to change to pm
    if (workHours[i] >= 12) {
        $(this).text((workHours[i]-12) + " pm");
        console.log((workHours[i]-12) + " pm");
        //fix 0 pm issue
        if (workHours[i] === 12) {
            $(this).text((workHours[i]) + " Midday");
        console.log((workHours[i]) + " pm");
        }
    } else { //if under 12 it will be am
        $(this).text(workHours[i] + " am");
        console.log(workHours[i] + " am");

    }
    workHours[i]++;
})

/*for (let index = startHour; index <= endHour; index++) { //can't do this with time module, breaks page
    workHours.push[index];
}*/

//Save button saves text to local storage

//only saves first textarea content atm, doesn't display text when refreshed yet

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    //$(".description").addClass("active")
    var text = $(".description").val();
    //var time = $(".time-block");

    localStorage.setItem("content", JSON.stringify(text));

    display();
});

function display() {
    var savedContent = localStorage.getItem("content");
    $(".description active").text(savedContent);
}