// Get the input element and button element from the HTML
const input = document.getElementById('user-input');
const button = document.getElementById('submit-button');

// Add event listener to the button
button.addEventListener('click', checkAnswer);

// Function to check the user's answer
function checkAnswer() {
  // Get the user's input
  const userInput = input.value.toLowerCase();

  // Define the expected answer
  const expectedAnswer = 'water'; // Replace with your expected answer

  // Check if the user's input matches the expected answer
  if (userInput === expectedAnswer) {
    window.location.href = 'gg.html'; // replace 'next_page.html' with the actual path to the next page
  } else {
    window.location.href = 'templedeath.html'; // replace 'next_page.html' with the actual path to the next page
  }
}
