import express from "express"
import { movieIndex,createMovie,updateMovie, deleteMovie } from "../controllers/movies.controller"

const router=express.Router()
//Read Movie
router.get('/',movieIndex)

//Create Movie
router.post('/',createMovie)

//update movie
router.put('/:id',updateMovie)

//delete movie
router.delete('/:id',deleteMovie)

export default router;