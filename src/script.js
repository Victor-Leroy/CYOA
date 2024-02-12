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
  const expectedAnswer = 'answer'; // Replace with your expected answer

  // Check if the user's input matches the expected answer
  if (userInput === expectedAnswer) {
    // Display a success message
    alert('Congratulations! You win!');
  } else {
    // Display a failure message
    alert('Sorry, you lose!');
  }
}
