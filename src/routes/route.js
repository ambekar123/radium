const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/movies', function (req, res) {
    let movies = ["Don","Super","Incendies"]
    res.send(movies)
});
router.get('/movies/:movieIndex',function(req,res){
    let movies = ['Don','Happynewyear','super']
    let index = req.params.movieIndex
    let movieAtIndex = movies[index]
    if(index>movies.length){
    res.send("Use a valid index")
    }else{
        res.send(movieAtIndex)
    }
 });

router.get('/films', function (req, res) {
    let films = [{"id": 1,"name": "Raju"},{"id": 2,"name":"Rahul"},{"id": 3,"name":"Anil"},{"id": 4,"name":"Tarun"}]
    res.send(films)
});
router.get('/films/:filmId', function (req, res) {
    let films = [{"id": 1,"name": "Raju"},{"id": 2,"name":"Rahul"},{"id": 3,"name":"Anil"},{"id": 4,"name":"Tarun"}]
    let value = +req.params.filmId
    let filmAtId = 0
    for(let i =0;i<films.length;i++){
        if(films[i].id === value){
            res.send(films[i])
            filmAtId = 1
            break;
        }
    }
    if (filmAtId === 0){
        res.send("No movie exists with this id")
    }
    
});


module.exports = router;