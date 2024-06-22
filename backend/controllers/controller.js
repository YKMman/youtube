const pool = require('../db/db')

// при регистрации мы должны проверить, есть ли такой уже зарегистрированный пользователь или нет.
// если пользователь зарегистрирован - мы должны ответить что он зарегистрирован
// если пользователя нет - мы его регистрируем 

// значит тут два возможных ответа. либо true либо false

const registrationUser = (req, res) => {
    const {name, email, password, passwordConfirm} = req.body

    // const query = pool.query('SELECT * FROM users WHERE email=$1', [email])

    const query = pool.query('INSERT INTO users(name,email,password,passwordConfirm) VALUES($1,$2,$3,$4)')
    const values = [name, email, password, passwordConfirm]

    res.json(query)
}

module.exports = {
    registrationUser
}