document.addEventListener("DOMContentLoaded", function () {
  const flightSearchForm = document.getElementById("flightSearchForm");

  flightSearchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form input values
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const departureDate = document.getElementById("departureDate").value;

    // Redirect to the booking page with the entered flight details as query parameters
    window.location.href = `book2.html?origin=${origin}&destination=${destination}&departureDate=${departureDate}`;
  });
});
