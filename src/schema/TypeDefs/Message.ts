import {GraphQLBoolean,GraphQLObjectType,GraphQLString} from 'graphql'

export const MessageTYpe = new GraphQLObjectType({

    name:"Message",
    fields:{
        success:{type:GraphQLBoolean},
        message:{type:GraphQLString},
    }
})