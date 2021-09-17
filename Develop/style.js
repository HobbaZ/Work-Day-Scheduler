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

if (currentHour) {

}

//get difference of start time and end time and create for loop that creates 3 sections for each hour
var start = 9;
var end = 17;
var businessHours = end-start;

for (let index = 0; index < businessHours; index++) {
    //Create time section, input section and checkbox section
    //need to assign a class name to the div so the bootstrap code will work hopefully
    createDiv = document.createElement('div', {is: "form-check"});
    createDiv.innerHTML = "<input class='form-check-input' type='checkbox' value='' id=flexCheckDefault'><label class='form-check-label' for='flexCheckDefault'>Completed</label>"
    document.body.appendChild(createDiv);
}
    //generate sections to add bootstrap code



    //var createCheckbox = document.querySelectorAll()

