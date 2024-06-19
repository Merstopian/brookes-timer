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



// for 30 minute warning
    var rtClock1 = new Date();

    var hours1 = rtClock1.getHours();
    var minutes1 = rtClock1.getMinutes() + 120;                  //CHANGE 1: total minutes - 30
    var seconds1 = rtClock1.getSeconds();


    if(minutes1 > 59) {
        minutes1 = minutes1 - 60;
        console.log('30 minutes have been shifted');
        hours1 = hours1 + 1;

        if(minutes1 > 59) {
            minutes1 = minutes1 - 60;
            console.log('30 minutes have been shifted DOUBLE');
            hours1 = hours1 + 1;

            if(minutes1 > 59) {
                minutes1 = minutes1 - 60;
                console.log('30 minutes have been shifted TRIPLE');
                hours1 = hours1 + 1;
            }
        }
    } 

    if(hours1 > 23) {
        console.log('1.1 hours have been shifted');
        hours1 = hours1 - 24;
    } 

    hours1 = ("0" + hours1).slice(-2);
    minutes1 = ("0" + minutes1).slice(-2);
    seconds1 = ("0" + seconds1).slice(-2);

    result30 = hours1 + " : " + minutes1 + " : " + seconds1;


// for ADDITIONAL TIME 30 minute warning
    var rtClock1AT = new Date();

    var hours1AT = rtClock1AT.getHours();
    var minutes1AT = rtClock1AT.getMinutes() + 158;                  //CHANGE 1.1: (total minutes * 1.25) - 30; and rounded
    var seconds1AT = rtClock1AT.getSeconds();


    if(minutes1AT > 59) {
        minutes1AT = minutes1AT - 60;
        console.log('1');
        hours1AT = hours1AT + 1;

        if(minutes1AT > 59) {
            minutes1AT = minutes1AT - 60;
            console.log('1.1');
            hours1AT = hours1AT + 1;

            if(minutes1AT > 59) {
                minutes1AT = minutes1AT - 60;
                console.log('1.2');
                hours1AT = hours1AT + 1;
            }
        }
    } 

    if(hours1AT > 23) {
        console.log('2');
        hours1AT = hours1AT - 24;
    } 

    hours1AT = ("0" + hours1AT).slice(-2);
    minutes1AT = ("0" + minutes1AT).slice(-2);
    seconds1AT = ("0" + seconds1AT).slice(-2);

    result30AT = hours1AT + " : " + minutes1AT + " : " + seconds1AT;



// for 5 minute warning
    var rtClock2 = new Date();

    var hours2 = rtClock2.getHours();
    var minutes2 = rtClock2.getMinutes() + 145;              //CHANGE 2: total minutes - 5
    var seconds2 = rtClock2.getSeconds();



    if(minutes2 > 59) {
        minutes2 = minutes2 - 60;
        console.log('55 minutes have been shifted');
        hours2 = hours2 + 1;

        if(minutes2 > 59) {
            minutes2 = minutes2 - 60;
            console.log('55 minutes have been shifted DOUBLE');
            hours2 = hours2 + 1;

            if(minutes2 > 59) {
                minutes2 = minutes2 - 60;
                console.log('55 minutes have been shifted TRIPLE');
                hours2 = hours2 + 1;
            }
        }
    } 


    if(hours2 > 23) {
        console.log('1.2 hours have been shifted');
        hours2 = hours2 - 24;
    } 

    hours2 = ("0" + hours2).slice(-2);
    minutes2 = ("0" + minutes2).slice(-2);
    seconds2 = ("0" + seconds2).slice(-2);

    result5 = hours2 + " : " + minutes2 + " : " + seconds2;


// for ADDITIONAL TIME 5 minute warning
    var rtClock2AT = new Date();

    var hours2AT = rtClock2AT.getHours();
    var minutes2AT = rtClock2AT.getMinutes() + 183;              //CHANGE 2.1: (total minutes * 1.25) - 5; and rounded
    var seconds2AT = rtClock2AT.getSeconds();


    if(minutes2AT > 59) {
        minutes2AT = minutes2AT - 60;
        console.log('3');
        hours2AT = hours2AT + 1;

        if(minutes2AT > 59) {
            minutes2AT = minutes2AT - 60;
            console.log('3.1');
            hours2AT = hours2AT + 1;

            if(minutes2AT > 59) {
                minutes2AT = minutes2AT - 60;
                console.log('3.2');
                hours2AT = hours2AT + 1;

                if(minutes2AT > 59) {
                    minutes2AT = minutes2AT - 60;
                    console.log('3.3');
                    hours2AT = hours2AT + 1;
                }
            }
        }
    } 

    if(hours2AT > 23) {
        console.log('4');
        hours2AT = hours2AT - 24;
    } 

    hours2AT = ("0" + hours2AT).slice(-2);
    minutes2AT = ("0" + minutes2AT).slice(-2);
    seconds2AT = ("0" + seconds2AT).slice(-2);

    result5AT = hours2AT + " : " + minutes2AT + " : " + seconds2AT;




// for END warning
    var rtClock3 = new Date();

    var hours3 = rtClock3.getHours();
    var minutes3 = rtClock3.getMinutes() + 150;               //CHANGE 3: total minutes
    var seconds3 = rtClock3.getSeconds();


    if(minutes3 > 59) {
        minutes3 = minutes3 - 60;
        console.log('60 minutes have been shifted');
        hours3 = hours3 + 1;

        if(minutes3 > 59) {
            minutes3 = minutes3 - 60;
            console.log('60 minutes have been shifted DOUBLE');
            hours3 = hours3 + 1;

            if(minutes3 > 59) {
                minutes3 = minutes3 - 60;
                console.log('60 minutes have been shifted TRIPLE');
                hours3 = hours3 + 1;
            }
        } 
    } 

    if(hours3 > 23) {
        console.log('1.3 hours have been shifted');
        hours3 = hours3 - 24;
    } 

    hours3 = ("0" + hours3).slice(-2);
    minutes3 = ("0" + minutes3).slice(-2);
    seconds3 = ("0" + seconds3).slice(-2);

    resultEND = hours3 + " : " + minutes3 + " : " + seconds3;


// for ADDITIONAL TIME END warning
    var rtClock3AT = new Date();

    var hours3AT = rtClock3AT.getHours();
    var minutes3AT = rtClock3AT.getMinutes() + 188;               //CHANGE 3.1: (total minutes * 1.25); and rounded
    var seconds3AT = rtClock3AT.getSeconds();


    if(minutes3AT > 59) {
        minutes3AT = minutes3AT - 60;
        console.log('5');
        hours3AT = hours3AT + 1;

        if(minutes3AT > 59) {
            minutes3AT = minutes3AT - 60;
            console.log('5.1');
            hours3AT = hours3AT + 1;

            if(minutes3AT > 59) {
                minutes3AT = minutes3AT - 60;
                console.log('5.2');
                hours3AT = hours3AT + 1;

                if(minutes3AT > 59) {
                    minutes3AT = minutes3AT - 60;
                    console.log('5.3');
                    hours3AT = hours3AT + 1;
                }
            }
        }
    } 

    if(hours3AT > 23) {
        console.log('6');
        hours3AT = hours3AT - 24;
    } 

    hours3AT = ("0" + hours3AT).slice(-2);
    minutes3AT = ("0" + minutes3AT).slice(-2);
    seconds3AT = ("0" + seconds3AT).slice(-2);

    resultENDAT = hours3AT + " : " + minutes3AT + " : " + seconds3AT;

}
//--------------------------------------------------------------------------------------------------
function savetime() {                                                     //Change 4.1 - copy all sections from line and replace
    var currentTimeStart = document.getElementById('clock').innerHTML;
    var table = document.getElementById('time-table');

    var newRow = table.insertRow(-1);
    var newRowExtra = table.insertRow(-1);                        

//insert Standard label                                          
    var newCellTest = newRow.insertCell(0);                

    newCellTest.textContent = "Standard";

    newCellTest.align = "center";
    newRow.bgColor = "lightgrey";

// insert Start time in table
    var newCell = newRow.insertCell(1);

    newCell.textContent = currentTimeStart;

    newCell.align = "center";
    newRow.bgColor = "lightgrey";



// insert 30 minute warning in table
    var currentTime30 = result30;
    var table = document.getElementById('time-table');

    var newCell30 = newRow.insertCell(2);

    newCell30.textContent = currentTime30;

    newCell30.align = "center";
    newRow.bgColor = "lightgrey";



// insert 5 minute warning in table
    var currentTime5 = result5;
    var table = document.getElementById('time-table');

    var newCell5 = newRow.insertCell(3);

    newCell5.textContent = currentTime5;

    newCell5.align = "center";
    newRow.bgColor = "lightgrey";



// insert END warning in table
    var currentTimeEND = resultEND;
    var table = document.getElementById('time-table');

    var newCellEND = newRow.insertCell(4);

    newCellEND.textContent = currentTimeEND;

    newCellEND.align = "center";
    newRow.bgColor = "lightgrey";



    
// insert Additional Time label                                       
    var table = document.getElementById('time-table');

    var newCellTest1 = newRowExtra.insertCell(0);

    newCellTest1.textContent = "Additional Time";

    newCellTest1.align = "center";
    newRowExtra.bgColor = "lightgrey";

// insert Start time in table row 2
    var newCellExtra = newRowExtra.insertCell(1);

    newCellExtra.textContent = currentTimeStart;

    newCell.align = "center";
    newRow.bgColor = "lightgrey";


// insert ADDITIONAL TIME 30 minute warning in table
    var currentTime30AT = result30AT;
    var table = document.getElementById('time-table');

    var newCell30AT = newRowExtra.insertCell(2);

    newCell30AT.textContent = currentTime30AT;

    newCell30AT.align = "center";
    newRow.bgColor = "lightgrey";


// insert ADDITIONAL TIME 5 minute warning in table
    var currentTime5AT = result5AT;
    var table = document.getElementById('time-table');

    var newCell5AT = newRowExtra.insertCell(3);

    newCell5AT.textContent = currentTime5AT;

    newCell5AT.align = "center";
    newRow.bgColor = "lightgrey";


// insert ADDITIONAL TIME END warning in table
    var currentTimeENDAT = resultENDAT;
    var table = document.getElementById('time-table');

    var newCellENDAT = newRowExtra.insertCell(4);

    newCellENDAT.textContent = currentTimeENDAT;

    newCellENDAT.align = "center";
    newRow.bgColor = "lightgrey";


}       

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const startingHours = 2;                                        //CHANGE 4
    const startingMinutes = 30;
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

    setTimeout(test, 7200000);                                      //CHANGE 5: 1000*(seconds-1800)

    function test() {
        console.log('30 minutes left');
    }

})


const pointer = document.getElementById('pointer');

btn.addEventListener('click', function() {
    pointer.classList.add('animation')
})