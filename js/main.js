import { Quiz } from "./quiz.js";
import { Question } from "./question.js";
let start = document.getElementById("start");
let difficultyMenu = document.getElementById("floatingSelect1");
let categoryMenu = document.getElementById("floatingSelect2");
let numberInput = document.getElementById("floatingNumber");
let form = document.querySelector(".form");
export let questions;
export let myQuiz ;
export let questionContainer = document.querySelector(".question-container");



start.addEventListener("click", async function(){
    let difficulty = difficultyMenu.value;
    let category = categoryMenu.value;
    let number = numberInput.value;
    myQuiz = new Quiz(difficulty, category, number);
    questions = await myQuiz.getAllQuestions();
    form.classList.add("d-none");
    let myQuestion = new Question(0);
    myQuestion.display();
} )