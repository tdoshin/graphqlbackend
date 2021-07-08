import {buildSchema} from 'graphql'

const schema = buildSchema(`
    type Movie {
        id: ID
        movieName: String
        genre: String
        price: Int
        language: String
        stack: Stack
        actors: [Actor]

    }

    type Actor {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getMovie(id: ID): Movie
    }

    input MovieInput{

        id: ID
        movieName: String!
        genre: String
        price: Int
        language: String
        stack: Stack
        actors: [ActorInput]!

    }

    input ActorInput{
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation {
        createMovie(input: MovieInput): Movie
    }

`)


export default schema