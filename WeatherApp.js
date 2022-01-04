let date = new Date().toUTCString();
document.getElementById("edit").innerHTML = date;

let searchForm = document.querySelector("#formId");
searchForm.addEventListener("submit", searchNow);

function searchNow(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchCity");

  let h2 = document.querySelector("#change");
  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value}`;
  }
}

let Farenheit = document.querySelector("#fahrenheit-link");
Farenheit.addEventListener("click", convertToFarenheit);

function convertToFarenheit(event) {
  event.preventDefault();
  let conversion = document.querySelector("#temperature");
  conversion.innerHTML = 20;
}

let Celsius = document.querySelector("#celsius-link");
Celsius.addEventListener("click", convertToCelsius);

function convertToCelsius(event) {
  event.preventDefault();
  let secondConversion = document.querySelector("#temperature");
  secondConversion.innerHTML = 15;
}
