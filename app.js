// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI variables
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assing UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Event listener
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum) {
    // Game Over - Won

    // // Disable input
    // guessInput.disabled = true;
    // // Change border color
    // guessInput.style.borderColor = 'green';
    // // Set message
    // setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong number
    // guessesLeft = guessesLeft - 1
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // Game over - Lost

      // // Disable input
      // guessInput.disabled = true;
      // // Change border color
      // guessInput.style.borderColor = 'red';
      // // Set message
      // setMessage(`Game over, you lost. The correct number was ${winningNum}`, 'red');

      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);

    } else {
      // Game continues - amswer wrong
      
      // Change border color
      guessInput.style.borderColor = 'red';
      // Clear input
      guessInput.value = '';
      // Tell user its the wrong number
      setMessage(`${guess} is wrong, ${guessesLeft} guesses left`, 'red');
    }
    
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

// Get Wining number
function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}






// ES5 Prototypes
function Person(name, age, lastName, dob) {
  this.name = name;
  this.age = age;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getFullYear() - 1970);
  // }
}

Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getFullYear() - 1970);
}

Person.prototype.getFullName = function() {
  return `${this.name} ${this.lastName}`;
}

Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const brad = new Person('Brad', 30, 'Akinola', '07-06-1993');
const sarah = new Person('Sarah', 25, 'Moore', '03-04-1991');

console.log(brad);
console.log(sarah);
console.log(brad.getFullName());

sarah.getsMarried('Williams');
console.log(sarah.getFullName());

console.log(brad.hasOwnProperty('lastName'));

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Taye', 'Akinola');
console.log(person1.greeting());

// ES6 Classes
class Person {
  constructor(lastName, firstName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.lastName} ${this.firstName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const taye = new Person('Taye', 'Akinola', '07-06-1993');

taye.getMarried('Otedola');
console.log(taye);
console.log(taye.calculateAge());
console.log(Person.addNumbers(2, 4));

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static addMembershipCost() {
    return 500;
  }
}

const taye = new Customer('Taye', 'Akinola', '08063379647', 'Standard');

console.log(taye);
console.log(taye.greeting());
console.log(Customer.addMembershipCost());