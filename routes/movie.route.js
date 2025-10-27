import express from "express"

const router=express.Router()
//Read Movie
router.get('/',(req,res)=>{
  res.send("get All movies list")
})

//Create Movie
router.post('/',(req,res)=>{
  res.send("create a movie")
})

//update movie
router.put('/:id',(req,res)=>{
  res.send("update a movie")
})

//delete movie
router.delete('/:id',(req,res)=>{
    res.send("delete a movie")
})

export default router;