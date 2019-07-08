const raw = [1, 2, 3, 4, 5];
const result = raw.filter(i => i >= 3);
const users = raw.map(i => `User ${i}`);
const lostElement = raw.find(i => i === 6);
const thirdElement = raw.find(i => i === 3);
raw.push(6);
raw.splice(2, 1);

console.log(result);
console.log(users); // [ 'User 1', 'User 2', ... , 'User 5' ]
console.log(lostElement);
console.log(thirdElement);
console.log(raw);
