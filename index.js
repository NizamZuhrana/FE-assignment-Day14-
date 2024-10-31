"use strict";
// SOAL 1
// getFullName
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = { firstName: "Nizam", lastName: "Zuhrana" };
console.log(getFullName(person));
// SOAL 2
// wrappinArray 
function wrapInArray(value) {
    return [value];
}
var wrappedValue = wrapInArray('Hello World');
console.log(wrapInArray(wrappedValue));
