let dateTime = new Date();

const watch = document.getElementById("watch");
const calendar = document.getElementById("calendar");

// Change time after every second

setInterval(() => {
  dateTime = new Date();

  watch.innerText = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()} `;
  calendar.innerText = `${dateTime.getDay()}/${dateTime.getMonth()}/${dateTime.getFullYear()} `;
}, 1);

// Settings
const settingsContainer = document.getElementById("settings");
const settingsButton = document.getElementById("settings-button");

settingsButton.addEventListener("click", () => {
  changeVisibility(settingsContainer);
});

const fontSelector = document.getElementById("font");

fontSelector.addEventListener("change", (event) => {
  setupFont(watch, event.target.value);
  setupFont(calendar, event.target.value);
});

// Tools

function changeFont(element, font) {
  element.style.fontFamily = font;
}

function setupFont(element, font) {
  switch (font) {
    case "Silkscreen":
      changeFont(element, "Silkscreen, cursive");
      break;
    case "OpenSans":
      changeFont(element, "Open Sans, sans-serif");
      break;
    case "AlumniPinstripe":
      changeFont(element, "Alumni Sans Pinstripe, sans-serif");
      break;
    case "AlumniCollegiate":
      changeFont(element, "Alumni Sans Collegiate One, sans-serif");
      break;
    case "Roboto":
      changeFont(element, "Roboto, sans-serif");
      break;
    case "Aboreto":
      changeFont(element, "Aboreto, cursive");
      break;
    default:
      changeFont(element, "Roboto, sans-serif");
      break;
  }
}

function changeVisibility(element) {
  const display = window.getComputedStyle(element).display;

  console.log(display);

  if (display === "block") element.style.display = "none";
  if (display === "none") element.style.display = "block";
}
