const pool = require('../db/db')

// при регистрации мы должны проверить, есть ли такой уже зарегистрированный пользователь или нет.
// если пользователь зарегистрирован - мы должны ответить что он зарегистрирован
// если пользователя нет - мы его регистрируем 

// значит тут два возможных ответа. либо true либо false

const registrationUser = (req, res) => {
    const {name, email, password, passwordConfirm} = req.body

    const query = pool.query('SELECT * FROM users WHERE email=$1', [email])

    res.json(query)
}

module.exports = {
    registrationUser
}