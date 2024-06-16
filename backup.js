let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const startingMinutes = 1;
    let time = startingMinutes * 60;

    const countdownEl = document.getElementById('countdown');

    const countInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;     //this line of code makes sure that when there are less than 10 seconds, there is a 0 included in the countdown//

        if(minutes < 1) {
            if(seconds < 1) {
                clearInterval(countInterval);
                console.log('time has ended')                 
            }
        }

        countdownEl.innerHTML = `${minutes}:${seconds}`;
        time--;
    }

    setTimeout(test, 30000);

    function test() {
        console.log('30 seconds left');
    }

})


//DELETE THIS - ITS ONLY FOR BACKUP PURPOSES//