/*
Tasks

1: Create an Object named "person" including key:value pairs of "name", "age" and "city".

2: Add an array of your favourite films to the person object using dot notation.

3: Create an object named "pet" key value pairs of "animal" and "name". Add methods to the object of "eat" and "drink" that return a message about the pet eating or drinking.
*/

/*
Nested Objects Task

1: Access the name Johns supervisor.

2: Access the title of the Great Gatsby
*/

// Nested Objects 
const employee = {
  id: 1,
  name: 'John Doe',
  position: 'Software Engineer',
  department: {
    name: 'Engineering',
    location: 'Building A',
    supervisor: {
      name: 'Jane Smith',
      position: 'Engineering Manager'
    }
  }
}

const library = {
  name: 'Public Library',
  location: 'City Center',
  books: [
    {
      id: 'B001',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      details: {
        genre: 'Fiction',
        year: 1925
      }
    },
    {
      id: 'B002',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      details: {
        genre: 'Fiction',
        year: 1960
      }
    }
  ]
}

// Task 1
console.log("Task 1 \n -----");

const person = {
  name: 'Kriyes',
  age: 20,
  city: 'London'
}

console.log(person);

// Task 2
console.log("Task 2 \n -----");

person.favorites = ["Your Name", "Kung Fu Panda", "The Dark Knight", "Interstellar"];

console.log(person);

// Task 3
console.log("Task 3 \n -----");

const pet = {
  name: "Frederick",
  animal: "fish",
  eat: function () {
    return `${this.name} eats only the finest ${this.animal} cuisine`;
  },
  drink: function () {
    return `${this.name} drinks water rich in oxygen`;
  }
}

console.log(pet.eat());
console.log(pet.drink());

// Challenge Task 1
console.log("Challenge Task 1 \n -----");

// Challenge Task 2
console.log("Challenge Task 1 \n -----");