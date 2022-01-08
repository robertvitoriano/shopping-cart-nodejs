const express = require('express');
const router = express.Router();
const Books = require('../models/book')
const cartBook = require('../models/cart-book')

//Adiconando livros já existententes noo banco de dados
router.get('', function (req, res, next) {

  Books.find((err, docs) => {
    const bookRow = [];
    for (let i = 0; i < docs.length; i += 3) {
      bookRow.push(docs.slice(i, i + 3))
      console.log(docs[1].id)
    }

    res.render('index', { books: bookRow });

  });
});

router.get('/about', (req, res) => {

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
