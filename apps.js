

function displayCurrentDayAndUTCTime(){
    const currentDate = new Date();
    
    
    const currentDayElement = document.getElementById ("day");
    currentDayElement.innerHTML =currentDate.toLocaleDateString("en-US", { weekday: "long"});

    const currentTimeElement = document.getElementById("time") ;
    currentTimeElement.innerHTML=currentDate.toISOString();
}
    
    displayCurrentDayAndUTCTime();