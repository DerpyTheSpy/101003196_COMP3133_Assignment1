const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const mongodb_atlas_url = "mongodb+srv://derpythespy:2231663@cluster0.4dp6azc.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority";

mongoose.connect(mongodb_atlas_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});
async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({typeDefs, resolvers});
  await server.start();
  const app = express();
  app.use(bodyParser.json());

  app.get('/', (_, res) => {
    res.redirect('/graphql');
  });
  
  server.applyMiddleware({
     app,
     path: '/graphql'
  });


await new Promise(resolve => app.listen({ port: 8000 }, resolve));
  console.log(`Server ready at http://localhost:8000`);
}
startApolloServer(typeDefs, resolvers);

