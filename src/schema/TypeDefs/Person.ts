import {GraphQLObjectType, GraphQLString,GraphQLID} from 'graphql'


export const PersonType =new GraphQLObjectType({
    name:'Person',
    fields:{
        id:{type:GraphQLID},
        nombre:{type:GraphQLString},
        ap_paterno:{type:GraphQLString},
        ap_materno:{type:GraphQLString},
        direccion:{type:GraphQLString},
        telefono:{type:GraphQLString},
    }
})