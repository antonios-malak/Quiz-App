# Quiz App

## Overview
This is a dynamic Quiz App built with HTML, CSS, Bootstrap, and JavaScript. It allows users to select the difficulty level and category of questions, specify the number of questions, and start a quiz. The app fetches questions dynamically from an API, displays them, and provides an engaging experience with animations and styles.

---

## Features

### 1. **User Inputs**
- **Difficulty Level**: Choose the difficulty of the questions.
- **Category of Questions**: Select the category of quiz questions (e.g., General Knowledge, Science, History).
- **Number of Questions**: Input the desired number of questions.
- **Start Button**: Begins the quiz by sending the inputs as parameters to the API.

### 2. **Dynamic API Integration**
- The app constructs the API link dynamically based on user inputs and fetches the quiz questions.

### 3. **Question Display**
- A container displays:
  - A `span` showing the category of questions.
  - A `span` indicating the current question index out of the total number of questions.
  - An `h1` element showing the question text.
  - A list of possible answers.

### 4. **Score Display**
- A `span` styled as a button displays the current score.
- Final messages:
  - If all answers are correct: `h1` message **"Congratulations!"** with a smile emoji.
  - If any answer is incorrect: `h1` message showing the final score.

### 5. **Always Displayed Title**
- A `div` titled **"Quiz App"** is always visible and features a spinning animation using a border styled with a conic gradient. 
  - Gradient reference: [CSS Conic Gradients](https://www.w3schools.com/css/css3_gradients_conic.asp).

### 6. **Design and Animations**
- **Main Element**: Styled with a background image from [SVG Backgrounds](https://www.svgbackgrounds.com/).
- **Quiz Title and Quiz Container Animations**: Both are animated when loading using [Animate.css](https://animate.style/).
- **Answer Feedback**:
  - Correct answers: Animated with a pulse effect.
  - Incorrect answers: Animated with a shake-x effect.
  - Animation reference: [Animate.css](https://animate.style/).

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/antonios-malak/Quiz-App
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd quiz-app
   ```

3. **Open the App**
   - Open `index.html` in a web browser to use the app.

4. **Dependencies**
   - Ensure internet access for fetching animations and gradients from external sources.
   - External libraries used:
     - [Bootstrap](https://getbootstrap.com/)
     - [Animate.css](https://animate.style/)

---

## API Usage

The app fetches questions dynamically using a public API. Ensure the API link is correctly set up and active.
- API Link: [Open Trivia Database](https://opentdb.com/api_config.php)

---

## Project Structure

```
quiz-app/
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/
```

---

## Screenshots
_Add screenshots here to showcase the UI and features._

---

## Demo
- Live Demo: [Quiz App](https://antonios-malak.github.io/Quiz-App/)

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments
- [W3Schools CSS Conic Gradients](https://www.w3schools.com/css/css3_gradients_conic.asp)
- [SVG Backgrounds](https://www.svgbackgrounds.com/)
- [Animate.css](https://animate.style/)

Feel free to contribute and enhance the project!

