import express from 'express';
import cors from 'cors';
import {graphqlHTTP} from 'express-graphql'
import {schema} from './schema'
 
const app = express();

app.use(cors());

app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema,
}));

export default app