export class Quiz{
    constructor(difficulty, category, number){
        this.difficulty = difficulty;
        this.category = category;
        this.number = number;
        this.score = 0 ;
    }
    getApi(){
        return `https://opentdb.com/api.php?amount=${this.number}&category=${this.category}&difficulty=${this.difficulty}`;
    }
    async getAllQuestions(){
        let response = await fetch(this.getApi());
        let result = await response.json();        
        return result.results;
    }
   
}