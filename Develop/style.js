//Use moment.js to get today's date and display in currentDay element
var currentDay = moment().format("dddd, Do MMMM, YYYY");
$("#currentDay").text("Today is " + currentDay);

currentHour = moment().format("H"); //in 24 hour format
console.log("The current hour is " + currentHour);

var businessHours = [9,10,11,12,13,14,15,16,17, 18, 19, 20]; //testing purposes, reduce back to 17 for final production
var index = 0;

//use setTimeinterval?

//for each hour in businessHours array, check with currentHour to see what action to take, this breaks timeText each function
/*businessHours.forEach(function() { //working, not sure if right approach though
    if (businessHours[index] == currentHour) {
        console.log("currentHour and businessHours index are the same, should be red");
    } else if (businessHours[index] > currentHour) {
        console.log (businessHours[index] + " should be green in the future")
    } else {
        console.log (businessHours[index] + " should be grey in the past")
    }
    index++
});*/

//Display not completed next to checkboxes, change to completed when checked (not working atm)
if ($(".form-check-input").is(":checked")) {
    $("#checkbox8").text("Completed!") //checked shows completed
} else {
    $("#checkbox8").text("Not Completed!") //unchecked shows not completed
}

//for each instance of timeText in HTML, add 1 to businessHours index (working)
$(".timeText").each(function() {

    //check if current business hour is over twelve to change to pm
    if (businessHours[index] > 12) {
        $(this).text((businessHours[index]-12) + " pm");
        //console.log(businessHours[index]-12);
    } else {
        $(this).text(businessHours[index] + " am");
    }
    businessHours[index]++;
})



