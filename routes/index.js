const express = require('express');
const router = express.Router();
const Books = require('../models/book')
const cartBook = require('../models/cart-book')

//Adiconando livros já existententes noo banco de dados
router.get('', function (req, res, next) {

  Books.find((err, docs) => {
    let bookRow = [];
    for (let i = 0; i < docs.length; i += 3) {
      bookRow.push(docs.slice(i, i + 3))
      console.log(docs[1].id)
    }

    res.render('index', { books: bookRow });

  });
});

router.get('/about', (req, res) => {

  const books = [
    new Books({
      title: "O Programador Pragmático: De Aprendiz a Mestre",
      price: "125,50",
      stock: 50,
      author: "Andrew Hunt, David"
    }), new Books({
      title: "The Mythical Man-Month: Essays on Software Engineering",
      price: "170,19",
      stock: 32,
      author: "Frederick P. Books Jr"
    }), new Books({
      title: "Expressões Regulares - Uma Abordagem Divertida",
      price: "47,20",
      stock: 10,
      author: "Aurelio Marinho Jargas"
    }), new Books({
      title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
      price: "251,14",
      stock: 32,
      author: "Erick Evans"
    }), new Books({
      title: "Padrões de Arquitetura de Aplicações Corporativas",
      price: "101,59",
      stock: 25,
      author: "Martin Fowler"
    }), new Books({
      title: "The Design of Design: Essays from a Computer Scientist",
      price: "161,75",
      stock: 5,
      author: "Frederick P. Jr. Brooks"
    }), new Books({
      title: "Shell Script Profissional",
      price: "62,35",
      stock: 37,
      author: "Aurelio Jargas Marinho"
    }), new Books({
      title: "NoSQL Essencial: Um Guia Conciso para o Mundo Emergente da Persistência Poliglota",
      price: "52,00",
      stock: 19,
      author: "Pramod J. Sadalage, Martin"
    }), new Books({
      title: "Refactoring: Improving the Design of Existing Code",
      price: "220,63",
      stock: 43,
      author: "Martin Fowler"
    }), new Books({
      title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
      price: "148,61",
      stock: 1,
      author: "Robert C. Martin"
    }), new Books({
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      price: "180,04",
      stock: 16,
      author: "Robert C. Martin"
    }), new Books({
      title: "Clean Agile: Back to Basics",
      price: "174,20",
      stock: 29,
      author: "Robert C. Martin"
    }), new Books({
      title: "Building Microservices: Designing Fine-Grained Systems",
      price: "209,30",
      stock: 6,
      author: "Sam Newman"
    }), new Books({
      title: "Designing Data-Intensive Aplications:The Big Ideas Behind Reliable, Scalable and Maintainable Systems",
      price: "82,99",
      stock: 37,
      author: "Martin Kleppmann"
    }),
  ];

  books.forEach(async (book) => {
    await book.save();
  })
  res.render('about');
})

router.get('/cart', (req, res) => {


  cartBook.find((error, docs) => {
    const cartRows = [];

    docs.forEach(book => {
      cartRows.push(book)

    });

    res.render('cart', { cartRows: cartRows });

  });




})

router.get('/register', (req, res) => {


  res.render('register');

})

router.get('/confirmation', (req, res) => {
  res.render('confirmation');

})

// Cadastrar Livro
router.post('/', (req, res) => {
  const newBook = new Books({
    title: req.body.title,
    price: req.body.price,
    author: req.body.author,
    stock: req.body.stock
  });
  newBook.save()
    .then(result => {
      res.redirect('/')
    }).catch(err => {
      console.log(err)
    })

});


// //Adicionar ao banco de dados quando clicar e ao carrinho

router.post('/cart', (req, res) => {
  const addedBook = new cartBook({
    title: req.body.title,
    price: req.body.price,
    stock: req.body.stock
  });

  addedBook.save()
    .then(result => {
      res.redirect('/cart').catch(err => {
        console.log(err)
      })

    })

})

//Rota para edição

router.get('/:id/edit', (req, res) => {
  res.send('Edit book ' + req.params.id)
})
//rota para update
router.put('/:id', (req, res) => {


  res.send('Update book ' + req.params.id)
})

//rota para deletar

router.delete('/:id', async (req, res) => {
  let book;
  try {
    book = await cartBook.findById(req.params.id)
    await book.remove();
    res.redirect('/cart')
  }
  catch {
    if (book == null) {
      res.redirect('/')

    } else {
      res.redirect('/')

    }
  }

})


// total a Pagar

router.post('/comfirmation', (req, res) => {
  let subtotal = req.body.subtotal
  res.render('confirmation', { subtotal: subtotal })
  console.log(subtotal)
})

module.exports = router;
