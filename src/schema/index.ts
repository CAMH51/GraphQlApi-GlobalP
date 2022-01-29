import {GraphQLSchema, GraphQLObjectType} from 'graphql'
import{GREETING} from './Queries/Greeting'
import {GET_ALL_PERSON, GET_USER} from './Queries/Person'
import {CREATE_PERSON, DELETE_PERSON, UPDATE_PERSON} from './Mutations/Persons';


const RootQuery = new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        greeting:GREETING,
        getAllPerson:GET_ALL_PERSON,
        getUser:GET_USER
    }
})

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields: {
        createPerson:CREATE_PERSON,
        deletePerson:DELETE_PERSON,
        updatePerson:UPDATE_PERSON
    },
})
export const schema =new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation,
})