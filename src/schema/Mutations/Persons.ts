import {GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLString} from 'graphql'
import {Persons} from '../../entities/Users'
import {PersonType} from '../TypeDefs/Person'
import {MessageTYpe} from '../TypeDefs/Message'

export const  CREATE_PERSON = {
    type:PersonType,
    args:{
        nombre:{type:GraphQLString},
        ap_paterno:{type:GraphQLString},
        ap_materno:{type:GraphQLString},
        direccion:{type:GraphQLString},
        telefono:{type:GraphQLString},
    },
   async resolve(_:any,args:any){

        const {nombre, ap_paterno, ap_materno, direccion, telefono} = args

        const result = await Persons.insert({
            nombre:nombre,
            ap_paterno:ap_paterno,
            ap_materno:ap_materno,
            direccion:direccion,
            telefono:telefono
        })

        console.log(result);
    return {...args, id: result.identifiers[0].id}
}
}

export const DELETE_PERSON = {
    type: GraphQLBoolean,
    args:{
        id:{type:GraphQLID},
    },
  async  resolve(_:any,{id}:any){
      const result = await Persons.delete(id)
      if(result.affected === 1) return true;

        return false
    }
}

export const UPDATE_PERSON ={
    type:MessageTYpe,
    args:{
        id:{type:GraphQLID},
        input:{
            type:new GraphQLInputObjectType({
                name:"PersonInput",
                fields:{
                    nombre:{type:GraphQLString},
                    ap_paterno:{type:GraphQLString},
                    ap_materno:{type:GraphQLString},
                    direccion:{type:GraphQLString},
                    telefono:{type:GraphQLString}
                }
            })

        }
    },
    async resolve(_:any,{id,input}:any){
        const PersonFound = await Persons.findOne(id);

        if(!PersonFound)
        return {
            success:false,
            message:"Persona no encontrada"
        };
        const response = await Persons.update({id},{nombre:input.nombre,ap_paterno:input.ap_paterno,ap_materno:input.ap_materno,direccion:input.direccion,telefono:input.telefono})
        if(response.affected === 0)return false;
        return {
            success:true,
            message:'Registro actualizado'
        };
    }
}



