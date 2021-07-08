import {nanoid} from 'nanoid'

class Movie {

    constructor(id, {
        movieName, genre, price, language, stack, actors
    }){
        this.id = id
        this.movieName = movieName
        this.genre = genre
        this.price = price 
        this.language = language
        this.stack = stack 
        this.actors = actors
    }
}

const movieHolder = {}

const resolvers = {
    getMovie :  ({id})=> {
        return new Movie(id, movieHolder[id])
    },
    createMovie : ({input}) => {
        let id = nanoid()
        movieHolder[id] = input
        return new Movie(id, input)
    },
    updateMovie : ({id})=> {
        


    }
}


export default resolvers