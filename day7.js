// Task 1
let book = {
    title: "Wish I could tell you",
    author: "Durjoy Datta",
    year: 2019
};
console.log(book);

// Task 2
console.log(book.title);
console.log(book.author);

// Task 3
book.getDetails = function() {
    return `${this.title} is written by ${this.author}.`;
};
console.log(book.getDetails());

// Task 4
book.UpdYear = function(UpdYear) {
    this.year = UpdYear;
};
book.UpdYear(2022);
console.log(book);

// Task 5
let library = {
    name: "Collge Library",
    books: [
        { title: "Wish I could tell you", author: "Durjoy Datta", year:2019},
        { title: "The Alchemist", author: "Paulo Coelho", year:1988 }
    ]
};
console.log(library);

// Task 6
console.log(library.name);
library.books.forEach(book => console.log(book.title));

// Task 7
book.getTitleYear = function() {
    return `${this.title}, published in ${this.year}`;
};
console.log(book.getTitleYear());

// Task 8
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Task 9
console.log(Object.keys(book));
console.log(Object.values(book));