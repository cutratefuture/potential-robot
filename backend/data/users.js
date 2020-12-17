import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('password', 10),
        isAdmin: true
    },
    {
        name: 'Joe Dome',
        email: 'joe@example.com',
        password: bcrypt.hashSync('password', 10),
    },
    {
        name: 'Jane Lane',
        email: 'jane@example.com',
        password: bcrypt.hashSync('password', 10),
    },
]

export default users