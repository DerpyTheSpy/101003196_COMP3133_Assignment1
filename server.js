const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://derpythespy:2231663@cluster0.4dp6azc.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority";

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected');
        return server.listen({ port: 5000 });
    })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    });

    //Define Express Server
const app = express();
app.use(bodyParser.json());
app.use('*', cors());

//Add Express app as middleware to Apollo Server
server.applyMiddleware({app})

//console.log(server)

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    server.start().then(res => {
        server.applyMiddleware({ app, path: '/' });
        app.listen({ port }, () => 
          console.log(`Gateway API running at port: ${port}`)
        );  
      });
    server.applyMiddleware({app, path: '/graphql'});
    
    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
})
}

startApolloServer(typeDefs, resolvers);

 //mongodb+srv://derpythespy:2231663@cluster0.4dp6azc.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority