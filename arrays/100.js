// Predict and explain...
// What will get logged to the console when running the code below?
// Check your prediction and explanation by running the code. Use the MDN documentation for .push to help build your understanding of these outcomes

const cities = ["Manchester", "London", "Birmingham", "Cape Town", "Glasgow"];
const result = cities.push("Liverpool", "Sheffield");

console.log(`The result is ${result}`);
console.log("cities now looks like this: ", cities);

/*
cities is an array with length = 5
result refers to cities - not a copy
result is cities with 2 items added
cities length = 7
cities = ["Manchester", "London", "Birmingham", "Cape Town", "Glasgow", "Liverpool", "Sheffield"]
*/
