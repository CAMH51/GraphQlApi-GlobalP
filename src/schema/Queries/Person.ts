import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import {Persons} from '../../entities/Users'
import { PersonType } from "../TypeDefs/Person";

export const  GET_ALL_PERSON = {
    type:new GraphQLList(PersonType),
   async resolve(){
   return await Persons.find()
    }
}

export const GET_USER={
    type:PersonType,
    args:{
        id:{type:GraphQLID}
    },
   async resolve(_:any,args:any){
        return await Persons.findOne(args.id);
    }
}