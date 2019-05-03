import Express from 'express'
import Api from './api'
import DB from './api/config/mongoose'

const app = Express();
DB()
 
app.use("/api", Api)
app.get("/", (req,res)=>{res.json({succes:"is working"});console.log("is working")})

app.listen(9000, () => {
  console.log("Listening port 9000")
})
