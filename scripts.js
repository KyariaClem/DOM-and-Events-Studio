// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log("window loaded");


    let confirmButton = window.confirm("Ready for take off")

    const shipTakeoff = document.getElementById("takeoff")
    shipTakeoff.addEventListener("click", function (event) {
        console.log("ready for takeoff");
    });

    
    const  flightStatus = document.getElementById("flightStatus")
    flightStatus.addEventListener("click", function (event) {
    window.confirm("Ready for takeoff ?")
    flightStatus.innerHTML = "Takeoff ready"
    flightStatus = "takeoff ready"

    const backGroundColor = document.getElementById("shuttleBackground")
    backGroundColor.addEventListener("click", function (event) {
    });

    const shuttleHeight = document.getElementById("spaceShuttleHeight")
    shuttleHeight.addEventListener("click", function (event) {

    });

    });


    /*const backGroundColor = document.getElementById("shuttleBackground")
    backGroundColor.addEventListener("click", function (event) {
    });*/
let landingButton = window.alert("")
const landButton = document.getElementById("landing") 
landButton.addEventListener("click", function (event) {
    window.alert("The shuttle is landing. Landing gear engaged")
    flightStatus.innerHTML = "The shuttle has landed."
    shuttleHeight.innerHTML = 0
});

const abortMissionButton = document.getElementById("missionAbort")
abortMissionButton.addEventListener("click", function (event) {
    window.confirm("Confirm that you want to abort the mission.")
    flightStatus.innerHTML = "Mission aborted."
    shuttleHeight.innerHTML = 0
});

const rocketImage = document.getElementById("rocket")
const multiButtons = document.getElementsByClassName("center-block")
multiButtons[0].addEventListener("click", function (event) {
    multiButtons.innerHTML = rocket.width += 10
});

});