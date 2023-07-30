let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let totalYears = document.querySelector(".totalYears");
let totalMonths = document.querySelector(".totalMonths");
let totalDays = document.querySelector(".totalDays");
let btn = document.querySelector("button");
let errorMsgDay = document.querySelector(".error-msg-day");
let errorMsgMonth = document.querySelector(".error-msg-month");
let errorMsgYear = document.querySelector(".error-msg-year");
let dayText = document.querySelector(".day-text");
let monthText = document.querySelector(".month-text");
let yearText = document.querySelector(".year-text");

btn.addEventListener("click", () => {
  const currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  let enteredDay = dayInput.value.trim();
  let enteredMonth = monthInput.value.trim();
  let enteredYear = yearInput.value.trim();

  if (enteredDay === "" || enteredMonth === "" || enteredYear === "") {
    alert("Please fill the valid input");
    return;
  }

  let hasErrors = false; // Variable to track if there are any errors

  if (parseInt(enteredDay) > 31) {
    dayInput.classList.add("error-input");
    errorMsgDay.style.display = "flex";
    dayText.style.color = "hsl(0, 100%, 67%)";
    hasErrors = true;
  }

  if (parseInt(enteredMonth) > 12) {
    monthInput.classList.add("error-input");
    errorMsgMonth.style.display = "flex";
    monthText.style.color = "hsl(0, 100%, 67%)";
    hasErrors = true;
  }

  if (parseInt(enteredYear) > currentYear) {
    yearInput.classList.add("error-input");
    errorMsgYear.style.display = "flex";
    yearText.style.color = "hsl(0, 100%, 67%)";
    hasErrors = true;
  }

  if (hasErrors) {
    return; // Prevent calculation when there are errors
  }

  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (enteredDay > currentDay) {
    currentDay = currentDay + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }

  if (enteredMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  const calculatedYear = currentYear - enteredYear;
  const calculatedMonth = currentMonth - enteredMonth;
  const calculatedDay = currentDay - enteredDay;

  totalYears.textContent = calculatedYear;
  totalMonths.textContent = calculatedMonth;
  totalDays.textContent = calculatedDay;

  setTimeout(() => {
    totalYears.textContent = "--";
    totalMonths.textContent = "--";
    totalDays.textContent = "--";
    dayInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
  }, 5000);
});
