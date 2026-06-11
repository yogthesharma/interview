/**
 * PROTOTYPE CHAIN — Demos only
 * ============================
 *
 * Run:  node 06-prototype-chain.js
 *
 * Practice → 06-prototype-chain-practice.js
 *
 * ---------------------------------------------------------------------------
 * THE WHOLE THING IN 30 SECONDS
 * ---------------------------------------------------------------------------
 *
 * Every object has a hidden link to another object — its "prototype".
 * When you read obj.key:
 *   1. Look on obj itself
 *   2. Not found? Look on obj's prototype
 *   3. Keep going until null
 *
 *   dog.name  → own property on dog
 *   dog.eats  → found on dog's prototype (animal)
 *
 * class User {}  = syntactic sugar over constructor + prototype (interviews ask both)
 *
 * ---------------------------------------------------------------------------
 */

console.log(`
╔════════════════════════════════════════════════════╗
║  PROTOTYPE CHAIN — run and read output             ║
╚════════════════════════════════════════════════════╝
`);

// --- Example 1: inheritance via prototype ---

const animal = {
  eats: true,
  speak() {
    return "sound";
  },
};

const dog = Object.create(animal);
dog.name = "Bruno";

console.log("--- Example 1: lookup chain ---");
console.log("dog.name:", dog.name); // own
console.log("dog.eats:", dog.eats); // inherited
console.log("dog.speak():", dog.speak()); // inherited method

console.log(`
✅ dog doesn't have "eats" — JS walks up the chain to animal
`);

// --- Example 2: shadowing (own property hides inherited) ---

dog.eats = false;
console.log("--- Example 2: shadowing ---");
console.log("dog.eats:", dog.eats); // false — own property wins
console.log("animal.eats:", animal.eats); // true — unchanged

console.log(`
✅ Assigning dog.eats creates OWN property — doesn't change animal
`);

// --- Example 3: constructor + prototype (classic interview style) ---

function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  return `Hello, ${this.name}`;
};

const user = new User("Yog");

console.log("--- Example 3: constructor ---");
console.log("greet:", user.greet());
console.log("instanceof User:", user instanceof User);

console.log(`
✅ Methods on User.prototype are shared by all instances
   user doesn't own greet — inherits from User.prototype
`);

// --- Example 4: class is sugar ---

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    return `${this.brand} goes vroom`;
  }
}

const car = new Car("Tesla");
console.log("--- Example 4: class ---");
console.log(car.drive());
console.log("car instanceof Car:", car instanceof Car);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Lookup:     obj → prototype → prototype → null
 Own prop:   Object.hasOwn(obj, "key")
 Inherited:  "key" in obj
 instanceof: checks prototype chain of constructor
 class       = constructor + prototype sugar

Practice: 06-prototype-chain-practice.js
`);
