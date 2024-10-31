// SOAL 1
// getFullName

type Person = {
  firstName: string;
  lastName: string;
};

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

const person: Person = { firstName: "Nizam", lastName: "Zuhrana" };
console.log(getFullName(person));

// SOAL 2
// wrappinArray

function wrapInArray<T>(value: T): T[] {
  return [value];
}

const contohWrapped = wrapInArray("Hello World");
console.log(wrapInArray(contohWrapped));

export {};
