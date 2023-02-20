const Employee = require('./models/employee');
const Users = require('./models/user');

module.exports = {

    Query: {
        getUsers: async () => {
            try {
                const users = await Users.find();
                return users;
            } catch (err) {
                throw new Error(err);
            }
        },
        getEmployees: async () => {
            try {
                const employees = await Employee.find();
                return employees;
            } catch (err) {
                throw new Error(err);
            }
        },
        login : async (_, {username, password}) => {
            try {
                const users = await Users.find();
                return users;
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        createEmployee: async (_, { name, lastname, email, salary, gender }) => {
            try {
                const employee = await Employee.create({name: name, lastname: lastname, email: email, salary: salary,gender: gender});
                return await employee.save();
            } catch (err) {
                throw new Error(err);
            }
        },
        createUser: async (_, {username, password, email}) => {
            try {
                const user = await Users.create({username: username, password: password, email: email});
                return await user.save();
            } catch (err) {
                throw new Error(err);
            }
        },
    }
}
