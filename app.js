// include packages and define server related variables
const express = require('express')
const app = express()
const exphbr = require('express-handlebars')
const generatePassword = require('./generator_password')
const checkRepeatWord = require('./checkRepeat')
const port = 3000

// setting template engine
app.engine('handlebars', exphbr.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  const excludeDuplicates = checkRepeatWord(options)
  res.render('index', { password, options, excludeDuplicates })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})