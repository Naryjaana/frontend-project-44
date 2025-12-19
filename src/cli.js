import { Random } from 'random';
import readlineSync from 'readline-sync';

export class lab {


    static hello() {
        console.log('Welcome to the Brain Games!'); // Проверьте заглавную W
        const name = readlineSync.question('May I have your name? ');
        console.log(`Hello, ${name}!`); // Проверьте формат вывода
        return name;
    }
    static progressionInt(){
    const length = Math.floor(Math.random() * 6) + 5; // 5-10 чисел
    const start = Math.floor(Math.random() * 20) + 1; // Начальное число 1-20
    const step = Math.floor(Math.random() * 10) + 1; // Шаг 1-10
    const hiddenIndex = Math.floor(Math.random() * length); // Индекс скрытого числа
    
    const progression = [];
    for (let i = 0; i < length; i++) {
      progression.push(start + i * step);
    }
    
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    
    return {
      progression: progression.join(' '),
      hiddenNumber: hiddenNumber.toString()
    };
  }

  // Запуск игры
  static progression() {
    console.log('Welcome to the Brain Games!');
    const name = this.hello()
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');
    console.log('');
    
    const rounds = 3;
    
    for (let round = 1; round <= rounds; round++) {
      const { progression, hiddenNumber } = this.progressionInt();
      console.log(`Question: ${progression}`);
      
      const answer = readlineSync.question('Your answer:')
      const userAnswer = answer ? answer.trim() : '';
      
      if (userAnswer === hiddenNumber) {
        console.log('Correct!');
        this.score++;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      
      console.log('');
    }
    
    console.log(`Congratulations, ${name}!`);
    }  

    static isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;

        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }

        return true;
    }
    static prime(){
        const name = this.hello()
        
        let correctStreak = 0;
        console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.")
        while (correctStreak < 3) {
            const number = Math.floor(Math.random() * 10) + 2; // от 2 до 100

            const isPrime = this.isPrime(number);

            const expectedAnswer = isPrime ? "yes" : "no";

           
            console.log('Question:' + number)
            const answer = readlineSync.question('Your answer:' )

            const normalizedAnswer = answer.trim().toLowerCase();

            if (normalizedAnswer !== "yes" && normalizedAnswer !== "no") {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'. Let's try again, ${name}`);
                return;
            }

            if (normalizedAnswer === expectedAnswer) {
                console.log("Correct");
                correctStreak++;
            } else {
                const result = isPrime ? "yes" : "no";
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}`);
                return;
            }
        }

        console.log(`Congratulations, ${name}`);
    }
    //
    static commonDivisor(){
        const name = this.hello()
        console.log('Find the greatest common divisor of given numbers.')
        let isCountCorrect = 0
        while(isCountCorrect !== 3) {
            var a = parseInt (new Random().next() * 10.0)
            
            var b = parseInt (new Random().next() * 10.0)
            let result = 0
            console.log('Question:' + a + " " + b)
            while(b !== 0){
                result = b
                b = a % b
            }
            const answer = readlineSync.question('Your answer:')
            if(answer.toString() === result.toString()){
                console.log('Correct!')
                isCountCorrect += 1
            }
            else{
                console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + result + "'.Let's try again, " + name)
                break
            }
        }
        if(isCountCorrect === 3){
            console.log("Congratulations, " + name)
        }
    }
    static calc(){
    const name = this.hello()
    console.log('What is the result of the expression?')
    let isCountCorrect = 0
    while(true) {
    var a = parseInt (new Random().next() * 10.0)
    var operation = ["-","+","/","*"]
    var operationIndex = parseInt (new Random().next() * 3.0)
    var b = parseInt (new Random().next() * 10.0)
    console.log('Question: ' + a + " " + operation[operationIndex] + " " + b)
    const answer = readlineSync.question('Your answer:')
    let result = 0;
    switch(operation[operationIndex]){
        case "-":
            result = a - b;
            break;

            case "+":
            result = a + b;
            break;

            case "/":
            result = a / b;
            break;

            case "*":
            result = a * b;
            break;
    }
    console.log(a + " " + operation[operationIndex] + " " + b + " " + result)
    

    if(answer.toString() === "Infinity"){
        console.log('Correct!')
        isCountCorrect += 1
    }
    if(answer.toString() === result.toString()){
        console.log('Correct!')
        isCountCorrect += 1
    }else{
        console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + result + "'.Let's try again, " + name)
        break
    }
    if(isCountCorrect === 3){
        console.log("Congratulations, " + name)
        break
    }
}
 
    }

    static parity() {
        const name = this.hello();
        console.log('Answer "yes" if the number is even, otherwise answer "no".');

        let isCountCorrect = 0;
        while (isCountCorrect < 3) {
            const randomA = Math.floor(Math.random() * 100);
            console.log(`Question: ${randomA}`);
            const answer = readlineSync.question('Your answer: ');

            const isEven = randomA % 2 === 0;
            const correctAnswer = isEven ? 'yes' : 'no';

            if (answer === correctAnswer) {
                console.log('Correct!');
                isCountCorrect += 1;
            } else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
                console.log(`Let's try again, ${name}!`);
                return; // Выходим из функции при ошибке
            }
        }
        console.log(`Congratulations, ${name}!`);
    }
}
