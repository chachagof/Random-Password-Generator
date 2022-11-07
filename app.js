// include packages and define server related variables
const express = require('express')
const app = express()
const exphbr = require('express-handlebars')
const port = 3000

// setting template engine
app.engine('handlebars', exphbr.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})