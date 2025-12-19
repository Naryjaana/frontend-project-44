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
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;
  const roundsToWin = 3;

  while (correctAnswersCount < roundsToWin) {
    const num1 = getRandomInt(1, 100); // числа побольше, как в примерах Hexlet
    const num2 = getRandomInt(1, 100);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = gcd(num1, num2);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // завершаем игру при ошибке
    }
  }

  // Если дошли сюда — выиграли
  console.log(`Congratulations, ${name}!`);
    }
    static calc() {
    
    const name = this.hello()
    console.log(`Hello, ${name}!`);
    
    console.log('What is the result of the expression?');

    let correctCount = 0;
    const rounds = 3;

    while (correctCount < rounds) {
        // Генерируем числа от 1 до 20
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;


        const operations = ['+', '-', '*'];
        const op = operations[Math.floor(Math.random() * operations.length)];

        let result;
        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
        }


        console.log(`Question: ${a} ${op} ${b}`);

        const answer = readlineSync.question('Your answer: ');


        if (answer === result.toString()) {
            console.log('Correct!');
            correctCount += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
            console.log(`Let's try again, ${name}!`);
            return; // выходим — игра окончена
        }
    }


    console.log(`Congratulations, ${name}!`);
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
