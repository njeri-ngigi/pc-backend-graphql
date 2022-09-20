import express from 'express'
import config from './configs'

const { PORT } = config
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`)
})
