const express = require('express')
const dogSittingRouter = require('./routes/dogSittingRoutes')

const app = express()
const port = 3000

app.use(dogSittingRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

