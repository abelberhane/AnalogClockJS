const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock(){ 
    //Set up a new object instance of Date. Use Methods to pull the individual pieces of time out. Console log those pieces to make individual time variables.   
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute " + min + " Second: " + sec);


    // These lets will contain the degrees we want to be shown on the clock.
    //Hour multiplied by the amount of degrees and the 12 segmands - hours.
    //Second Part to make the Hour hand move slowly for minutes too- Take the current degrees for the Minute hand and then add it. 
    let hrPosition = (hr*360/12) + (min*(360/60)/12);
    //minutes in the current hour, multiplied by the amount of degrees in a circle, divided by 60 seconds. 
    //Second Part to make the Minute hand move slowly for seconds too- Take the current degrees for the Second hand and then add it.
    let minPosition = (min*360/60) + (sec*(360/60)/60);
    //seconds in the current minute, multiplied by the amount of degrees in a circle, divided by 60 seconds. 
    let secPosition = sec*360/60;


    //Uses the Numbers above and moves the Style sheet to show the time on the clock.
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//This is created so that we can have the function run automatically and always be called. The ,1000 add on was because this is usually run on Milliseconds and thats not needed, therefore every 1000 miliseconds = 1 second.
var interval = setInterval(runTheClock, 1000);