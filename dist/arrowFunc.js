/**
 * This function is for study Arrow Function.
 * @param name {string} - The name of the person
 * @param age  {number} - The age of the person
 * @param date {Date}   - The current date
 */
const arrow = (name, age, date) => {
    console.log(`${name} is ${age} years old. Today is ${date} so Happy UnBirthday!`);
};
arrow("Alice", 30, new Date());
export {};
