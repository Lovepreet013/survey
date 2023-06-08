// Get the form element
const startBtn = document.querySelector(".start");
const form = document.getElementById('surveyForm');
const greeting = document.querySelector(".greeting");

startBtn.addEventListener("click", () =>{
    form.classList.add("active");
    startBtn.classList.add("active");
    greeting.classList.add("active");
})

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get the user's name from the input field
  const nameInput = document.getElementById('name');
  const name = nameInput.value;

  // Generate a unique number between 1 and 9999
  const uniqueNumber = Math.floor(Math.random() * 9999) + 1;

  // Create an object to store the survey data
  const surveyData = {
    name: name,
    responses: []
  };

  // Iterate over the question elements
  const questions = document.querySelectorAll('select, textarea');
  questions.forEach(function(question) {
    // Get the question ID and user's response
    const questionId = question.id;
    const response = question.value;

    // Store the question and response as an object
    const questionResponse = {
      question: questionId,
      response: response
    };

    // Push the question response object to the array
    surveyData.responses.push(questionResponse);
  });

  // Generate the key for local storage using the user's name and unique number
  const key = `${name}-${uniqueNumber}`;

  // Store the survey data in local storage
  localStorage.setItem(key, JSON.stringify(surveyData));

  // Hide the form
  form.style.display = 'none';

  // Display a success message
  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';

  // Reload the page after 5 seconds
  setTimeout(function() {
    location.reload();
  }, 5000);
});
