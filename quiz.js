// Step 1: Define the function
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user’s answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Access the value of the selected radio button
    const feedback = document.getElementById("feedback");

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 5: Compare userAnswer with correctAnswer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "#28a745"; // green
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "#dc3545"; // red
        }
    } else {
        // Step 6: Handle the case where no option is selected
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#dc3545";
    }
}

// Step 7: Add an event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

