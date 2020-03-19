let Book = require('../models/book');
let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/booksShop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then()
    .catch(err => console.log(err))

let books = [
    new Book({
        title: "O Programador Pragmático: De Aprendiz a Mestre",
        price: "125,50",
        stock: 50,
        author: "Andrew Hunt, David"
    }), new Book({
        title: "The Mythical Man-Month: Essays on Software Engineering",
        price: "170,19",
        stock: 32,
        author: "Frederick P. Books Jr"
    }), new Book({
        title: "Expressões Regulares - Uma Abordagem Divertida",
        price: "47,20",
        stock: 10,
        author: "Aurelio Marinho Jargas"
    }), new Book({
        title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
        price: "251,14",
        stock: 32,
        author: "Erick Evans"
    }), new Book({
        title: "Padrões de Arquitetura de Aplicações Corporativas",
        price: "101,59",
        stock: 25,
        author: "Martin Fowler"
    }), new Book({
        title: "The Design of Design: Essays from a Computer Scientist",
        price: "161,75",
        stock: 5,
        author: "Frederick P. Jr. Brooks"
    }), new Book({
        title: "Shell Script Profissional",
        price: "62,35",
        stock: 37,
        author: "Aurelio Jargas Marinho"
    }), new Book({
        title: "NoSQL Essencial: Um Guia Conciso para o Mundo Emergente da Persistência Poliglota",
        price: "52,00",
        stock: 19,
        author: "Pramod J. Sadalage, Martin"
    }), new Book({
        title: "Refactoring: Improving the Design of Existing Code",
        price: "220,63",
        stock: 43,
        author: "Martin Fowler"
    }), new Book({
        title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
        price: "148,61",
        stock: 1,
        author: "Robert C. Martin"
    }), new Book({
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        price: "180,04",
        stock: 16,
        author: "Robert C. Martin"
    }), new Book({
        title: "Clean Agile: Back to Basics",
        price: "174,20",
        stock: 29,
        author: "Robert C. Martin"
    }), new Book({
        title: "Building Microservices: Designing Fine-Grained Systems",
        price: "209,30",
        stock: 6,
        author: "Sam Newman"
    }), new Book({
        title: "Designing Data-Intensive Aplications:The Big Ideas Behind Reliable, Scalable and Maintainable Systems",
        price: "82,99",
        stock: 37,
        author: "Martin Kleppmann"
    }),
];
let done = 0;
//Inserindo(save) todos os dados no schema 

// Book.find((err, docs) => {
//     if (docs.length === 0 || !docs || docs === null || docs === undefined)
//         for (let i = 0; i < books.length; i++) {
//             books[i].save((err, result) => {
//                 done++;

//                 if (done === books.length) {
//                     console.log("Data Inserted")
//                     exit();
//                 }
//             });
//         }

//     function exit() {
//         mongoose.disconnect()
//     }


// });

for (let i = 0; i < books.length; i++) {
    books[i].save((err, result) => {
        done++;

        if (done === books.length) {
            console.log("Data Inserted")
            exit();
        }
    });
}

function exit() {
mongoose.disconnect()

}