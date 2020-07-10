const dayAndDate = document.querySelector('.currentDayAndDate');


const displayDayAndDate = () => {
    let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let newDate = new Date();
    let currentDate = newDate.getDate();
    let day = daysArr[newDate.getDay()];
    let month = monthsArr[newDate.getMonth()];
    dayAndDate.textContent = `${day}, ${month} ${currentDate}`;
}


//app controller
displayDayAndDate();

