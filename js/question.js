import { questions, myQuiz , questionContainer } from "./main.js";
export class Question{
    constructor(index){
        this.index=index;
        this.category = questions[index].category;
        this.question =questions[index].question;
        this.correctAnswer = questions[index].correct_answer;
        this.wrongAnswers = questions[index].incorrect_answers;
        this.allAnswers = this.getRandomAnswer();
        this.isAnswered = false;
    }
    getRandomAnswer(){
        let randomAnswer = [...this.wrongAnswers , this.correctAnswer].sort();
        return randomAnswer;
    }
    display(){
        const questionMarkup = `
        <div class="row text-center animate__animated animate__backInUp bg-light p-4">
        <div class="col-12 d-flex justify-content-between mt-3">
            <span class="btn btn-primary" id="num">${this.index + 1} of ${questions.length}</span>
            <span class="btn btn-primary" id="cat">${this.category}</span>
        </div>
        <div class="col-12">
            <h1 class="my-5">${this.question}</h1>
        </div>
        <div class="col-12 mb-5">
            <ul class=" options list-unstyled d-flex flex wrap justify-content-between ">
            ${this.allAnswers.map(answer => `<li class="border border-2 border-secondary rounded-pill py-2 px-3">${answer}</li>`).join("")}
            </ul>
            <span id="score" class="fs-2 btn btn-info mt-5 ">score:${myQuiz.score}</span>
        </div>
        </div>
        `
        questionContainer.innerHTML = questionMarkup;
        let options = document.querySelectorAll(".options li");
        options.forEach(option => {
            option.addEventListener("click", () => {
                this.checkAnswer(option);
                this.nextQuestion()
            })
        });
    };
    checkAnswer(option){
        if(!this.isAnswered){
            this.isAnswered = true;
            if(option.textContent === this.correctAnswer){
                myQuiz.score++;
                option.classList.add("bg-success", "text-white" ,"animate__animated", "animate__pulse");
            }else{
                option.classList.add("bg-danger", "text-white", "animate__animated", "animate__shakeX");
            }
        }  
    }
    nextQuestion(){
        if(this.index < questions.length - 1){
            setTimeout(() => {
                this.index++;
                let nextQuestion = new Question(this.index);
                nextQuestion.display();
            }, 1000);
        }else{
            if(myQuiz.score === questions.length){
            questionContainer.innerHTML = `
            <div class="row text-center animate__animated animate__backInUp bg-light p-4">
            <div class="col-12">
                <h1>congratulations :)</h1>
                <h1 class="my-5">your score is ${myQuiz.score}  of  ${questions.length}</h1>
                <button class="btn btn-primary mb-3" id="try-again">try again</button>
            </div>
            </div>
                `
            }
            else{
            questionContainer.innerHTML = `
            <div class="row text-center animate__animated animate__backInUp bg-light p-4">
            <div class="col-12">
                <h1 class="my-5">your score is ${myQuiz.score}  of  ${questions.length}</h1>
                <button class="btn btn-primary mb-3" id="try-again">try again</button>
            </div>
            </div>
            `
        }
            let tryAgain = document.getElementById("try-again");
            tryAgain.addEventListener("click", () => {
                location.reload();
            })
        }
            
};
};