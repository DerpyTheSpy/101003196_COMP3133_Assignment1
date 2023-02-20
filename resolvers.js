

const Employee = require('./models/employee');
const Users = require('./models/user');

const resolvers = {

    Query: {
        getUsers: async () => {
            try {
                const users = await Users.find();
                return users;
            } catch (err) {
                throw new Error(err);
            }
        },
        getUser: async (_, {id}) => {
            try {
                const user = await Users.findById(id);
                return user;
            } catch (err) {
                throw new Error(err);
            }
        },
        getEmployee: async (_, {id}) => {
            try {
                const employee = await Employee.findById(id);
                return employee;
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
                const users = await Users.findOne({username, password});
                return users;
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        createEmployee: async (_, { firstName, lastName, email, salary, gender }) => {
            try {
                const employee = await Employee.create({firstName: firstName, lastName: lastName, email: email, salary: salary, gender: gender});
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
        updateEmployee: async (_, {firstName, lastName, email, salary, gender }) => {
            try{
                const updatedEmployee = await Employee.findOneAndUpdate(
                    {
                        _id: id
                    },
                    {
                        $set: {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            gender: gender,
                            salary: salary
                        },
                    },
                    { new: true }
                );
                if (!updatedEmployee)
                return {
                    status: false
                };
            else
                return {
                    status: true,
                    employee: updatedEmployee
                };
        } catch (error) {
            return {
                status: false,
                error: error
            };
        }
    },
    }
}
module.exports = {resolvers};