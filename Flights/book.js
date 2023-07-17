// Get the form element
const form = document.getElementById("bookingForm");
const passengerDetailsContainer = document.getElementById("passengerDetails");
const numOfPassengersSelect = document.getElementById("numOfPassengers");

// Function to create passenger detail inputs
function createPassengerInputs(numOfPassengers) {
  let passengerInputsHTML = "";
  for (let i = 1; i <= numOfPassengers; i++) {
    passengerInputsHTML += `
      <div class="field-agileinfo-spc form-w3-agile-text">
        <label for="passengerName${i}">Passenger ${i} Name</label>
        <input type="text" id="passengerName${i}" name="passengerName${i}" placeholder="Enter passenger ${i} name" required>
      </div>`;
  }
  passengerDetailsContainer.innerHTML = passengerInputsHTML;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const numOfPassengers = numOfPassengersSelect.value;
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;

  // Get passenger names
  const passengerNames = [];
  for (let i = 1; i <= numOfPassengers; i++) {
    const passengerName = document.getElementById(`passengerName${i}`).value;
    passengerNames.push(passengerName);
  }

  // Here you can add your code to process the form data or send it to a server.
  // For this example, we'll just show a success message in an alert dialog.

  const successMessage = `Booking Details:
    Number of Passengers: ${numOfPassengers}
    Passenger Names: ${passengerNames.join(", ")}
    Full Name: ${fullName}
    Phone Number: ${phoneNumber}
    Email: ${email}`;

  alert("Form submitted successfully!\n\n" + successMessage);

  // Clear the form fields
  form.reset();
}

// Add event listener for form submission
form.addEventListener("submit", handleSubmit);

// Add event listener for changing the number of passengers
numOfPassengersSelect.addEventListener("change", function () {
  const numOfPassengers = this.value;
  createPassengerInputs(numOfPassengers);
});

// Initialize passenger inputs based on the initial value
createPassengerInputs(numOfPassengersSelect.value);
