import {createConnection} from 'typeorm'
import {Persons} from './entities/Users'

export const connectDB = async()=>{
    await createConnection({
        type:'mysql',
        username:'root',
        password:'',
        port:3306,
        host:'localhost',
        database:'dbgraphql',
        entities: [Persons],
        synchronize:false,
        ssl:false

    })
}