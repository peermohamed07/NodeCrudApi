import express from "express"
import movieRoute from './routes/movie.route.js'
const app=express()
const PORT=6969;
app.get('/',movieIndex)
 
app.use('/movie',movieRoute)

app.listen(PORT,()=>{
console.log(`The server is running at http://localhost:${PORT}`)
})