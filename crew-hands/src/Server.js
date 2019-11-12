import Express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import Api from './api'
import DB from './api/config/mongoose'
import MongooseSchema from './api/config/mongoose'
import multer from 'multer'

const app = Express()
DB()

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(json())

// app.use(multer({
//   dest: "./ uploads /",
//   rename: function (fieldname, filename) {
//     return filename;
//   },
// }));

app.use('/api', Api)

app.get('/', (req, res) => {
  res.send(req.body)
  console.log('get is working')
})

app.post('/', (req, res) => {
  res.send({ succes: 'post is working' })
  console.log('post is really working')
})

app.listen(9000, () => {
  console.log('Listening port 9000')
})
