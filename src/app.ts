import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import config from './configs'
import schema from './graphql/schema'

const { PORT } = config
const app = express()

app.get('/', (_req, res) => {
  res.send('Hello World!')
})
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'dev'
  })
)

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`)
})

// TODO: Accept-Encoding: gzip
