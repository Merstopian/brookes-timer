function realtimeClock() {
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    //var amPm = ( hours < 12 ) ? "AM" : "PM";
                                                      //--> for am/pm
    //hours = (hours > 12) ? hours - 12 : hours;


    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds; //+ " " + amPm;    --> for am/pm
    var t = setTimeout(realtimeClock, 500);



// for 30 second warning
    var rtClock1 = new Date();

    var hours1 = rtClock1.getHours();
    var minutes1 = rtClock1.getMinutes();
    var seconds1 = rtClock1.getSeconds() + 30;


    if(seconds1 > 59) {
        seconds1 = seconds1 - 60;
        console.log('30 seconds have been shifted');
        minutes1 = minutes1 + 1;
    } 

    if(hours1 > 23) {
        console.log('1.1 hours have been shifted');
        hours1 = hours1 - 24;
    } 

    hours1 = ("0" + hours1).slice(-2);
    minutes1 = ("0" + minutes1).slice(-2);
    seconds1 = ("0" + seconds1).slice(-2);

    result30 = hours1 + " : " + minutes1 + " : " + seconds1;


// for 5 second warning
    var rtClock2 = new Date();

    var hours2 = rtClock2.getHours();
    var minutes2 = rtClock2.getMinutes();
    var seconds2 = rtClock2.getSeconds() + 55;


    if(seconds2 > 59) {
        seconds2 = seconds2 - 60;
        console.log('55 seconds have been shifted');
        minutes2 = minutes2 + 1;
    } 

    if(hours2 > 23) {
        console.log('1.2 hours have been shifted');
        hours2 = hours2 - 24;
    } 

    hours2 = ("0" + hours2).slice(-2);
    minutes2 = ("0" + minutes2).slice(-2);
    seconds2 = ("0" + seconds2).slice(-2);

    result5 = hours2 + " : " + minutes2 + " : " + seconds2;





    var rtClock3 = new Date();

    var hours3 = rtClock3.getHours();
    var minutes3 = rtClock3.getMinutes();
    var seconds3 = rtClock3.getSeconds() + 60;

// for END warning
    if(seconds3 > 59) {
        seconds3 = seconds3 - 60;
        console.log('60 seconds have been shifted');
        minutes3 = minutes3 + 1;
    } 

    if(hours3 > 23) {
        console.log('1.3 hours have been shifted');
        hours3 = hours3 - 24;
    } 

    hours3 = ("0" + hours3).slice(-2);
    minutes3 = ("0" + minutes3).slice(-2);
    seconds3 = ("0" + seconds3).slice(-2);

    resultEND = hours3 + " : " + minutes3 + " : " + seconds3;

}

function savetime() {
    var currentTimeStart = document.getElementById('clock').innerHTML;
    var table = document.getElementById('time-table');

    var newRow = table.insertRow(-1);
    var newCell = newRow.insertCell(0);

    newCell.textContent = currentTimeStart;

    newCell.align = "center";
    newRow.bgColor = "lightgrey";



// insert 30 second warning in table
    var currentTime30 = result30;
    var table = document.getElementById('time-table');

    var newCell30 = newRow.insertCell(1);

    newCell30.textContent = currentTime30;

    newCell30.align = "center";
    newRow.bgColor = "lightgrey";



// insert 5 second warning in table
    var currentTime5 = result5;
    var table = document.getElementById('time-table');

    var newCell5 = newRow.insertCell(2);

    newCell5.textContent = currentTime5;

    newCell5.align = "center";
    newRow.bgColor = "lightgrey";



// insert END warning in table
    var currentTimeEND = resultEND;
    var table = document.getElementById('time-table');

    var newCellEND = newRow.insertCell(3);

    newCellEND.textContent = currentTimeEND;

    newCellEND.align = "center";
    newRow.bgColor = "lightgrey";


}

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const startingHours = 0;
    const startingMinutes = 1;
    let time = (startingHours * 60 * 60) + (startingMinutes * 60);

    const countdownEl = document.getElementById('countdown');

    const countInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;     //this line of code makes sure that when there are less than 10 seconds or minutes, there is a 0 included in the countdown//
        

        if(time <= 0) {     
            clearInterval(countInterval);
            console.log('time has ended')                 
        }

        countdownEl.innerHTML = `${hours}:${displayMinutes}:${displaySeconds}`;
        time--;
    }

    setTimeout(test, 30000);

    function test() {
        console.log('30 seconds left');
    }

})


const pointer = document.getElementById('pointer');

btn.addEventListener('click', function() {
    pointer.classList.add('animation')
})