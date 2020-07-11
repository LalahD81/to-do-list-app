const dayAndDate = document.querySelector('.currentDayAndDate');
const plus = document.querySelector('.fa-plus');
const inputBox = document.querySelector('.input-box');
const listArea = document.querySelector('.list-area');
const list = document.querySelector('.list');
const deleteIcon = document.querySelector('.fa-trash-alt');
const checkbox = document.querySelector('.checkbox');


const displayDayAndDate = () => {
    let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let newDate = new Date();
    let currentDate = newDate.getDate();
    let day = daysArr[newDate.getDay()];
    let month = monthsArr[newDate.getMonth()];
    dayAndDate.textContent = `${day}, ${month} ${currentDate}`;
}

const addList = () => {
    if (inputBox.value.length > 0 ) {
        listArea.insertAdjacentHTML('beforeend', '<div class="list">' + '<input type="checkbox" class="checkbox" />' + '<label for="to-dos">' + inputBox.value + '</label>' + '</div>');
        inputBox.value = '';
    }   
}


//app controller
displayDayAndDate();
plus.addEventListener('click', addList);
