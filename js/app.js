//  variables
let LISTARRAY = [];
let id = 0;
let data = localStorage.getItem("LISTITEM");
const dayAndDate = document.querySelector(".currentDayAndDate");
const plus = document.querySelector(".fa-plus");
const inputBox = document.querySelector(".input-box");
const listArea = document.querySelector(".list-area");
const list = document.querySelector(".list");
const deleteIcon = document.querySelector(".fa-trash-alt");
const refreshIcon = document.querySelector(".fa-sync-alt");
const uncheck = "fa-circle";
const check = "fa-check-circle";
const line = "lineThrough";

// Display day and date
const displayDayAndDate = () => {
  let daysArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let newDate = new Date();
  let currentDate = newDate.getDate();
  let day = daysArr[newDate.getDay()];
  let month = monthsArr[newDate.getMonth()];
  dayAndDate.textContent = `${day}, ${month} ${currentDate}`;
};

// Add item to UI
const addItem = (input, id, done, trash) => {
  if (trash) {
    return;
  }

  const DONE = done ? check : uncheck;
  const LINETHROUGH = done ? line : "";

  const item = `<div class="list"><i class="far ${DONE}" job="complete" id="${id}"></i><p class="text ${LINETHROUGH}">${input}</p><i class="fas fa-trash-alt" job="delete" id="${id}"></i></div>`;

  listArea.insertAdjacentHTML("beforeend", item);
};

// add item the "+" sign is clicked
const plusEvent = () => {
  if (inputBox.value.length > 0) {
    const input = inputBox.value;

    if (input) {
      addItem(input, id, false, false);

      LISTARRAY.push({
        name: input,
        id: id,
        done: false,
        trash: false,
      });
      localStorage.setItem("LISTITEM", JSON.stringify(LISTARRAY));
      id++;
    }
    inputBox.value = "";
  }
};

// click to label and item as complete
const doneItem = (element) => {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector(".text").classList.toggle(line);

  LISTARRAY[element.id].done = done ? false : true;
};

const removeItem = (element) => {
  element.parentNode.parentNode.removeChild(element.parentNode);

  LISTARRAY[element.id].trash = true;
};

const listEvents = (event) => {
  const element = event.target;
  const elJob = event.target.attributes.job.value;

  if (elJob === "complete") {
    doneItem(element);
  } else if (elJob === "delete") {
    removeItem(element);
  }

  localStorage.setItem("LISTITEM", JSON.stringify(LISTARRAY));
};

// Get data from local storage

const showList = (array) => {
  array.forEach((el) => {
    addItem(el.name, el.id, el.done, el.trash);
  });
};

const getData = () => {
  if (data) {
    LISTARRAY = JSON.parse(data);
    id = LISTARRAY.length;
    showList(LISTARRAY);
  } else {
    LISTARRAY = [];
    id = 0;
  }
};

// clear everything 
const clearAll = () => {
  localStorage.clear();
  location.reload();
}

// App controller
displayDayAndDate();

listArea.addEventListener("click", listEvents);

plus.addEventListener("click", plusEvent);

refreshIcon.addEventListener('click', clearAll);

getData();
