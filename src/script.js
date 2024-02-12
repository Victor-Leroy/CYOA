function checkAnswer() {
  var answer = document.getElementById('answer').value;
  var message = document.getElementById('message');

  if(answer === 'water') { // replace 'correct answer' with the actual answer
      window.location.href = 'gg.html'; // replace 'next_page.html' with the actual path to the next page
  } else {
    window.location.href = 'deathtemple.html';
      // Add any additional logic for game over state here
  }
}
