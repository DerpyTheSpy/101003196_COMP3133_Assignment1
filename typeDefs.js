const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    salary: String!
    gender: String!
    }
type Users {
    id: ID!
    username: String!
    password: String!
    email: String!
    }
type Query {
    getEmployees: [Employee]
    getEmployee(id: ID!): Employee
    getUsers: [Users]
    getUser(id: ID!): Users
    login(username: String!, password: String!): Users
}
type Mutation {
   createUser(username: String!, email: String!, password: String!): Users
    createEmployee(firstName: String!, lastName: String!, email: String!, gender: String!, salary: Float!): Employee
    updateEmployee(id: ID!, firstName: String!, lastName: String!, email: String!, gender: String!, salary: Float!): Employee
    deleteEmployee(id: ID!): Employee
}`;
module.exports = { typeDefs };

//63f3099c1e2b5d35f63c1bcb
//63f30711b0a6a8a21a34e080
