const express = require('express')
const cors = require('cors')

const pool = require('./db')

const app = express()

app.use(cors())
app.use(express.json())


app.post('/add', async (req, res) => {
    try {

        const { firstname, lastname, dob, gender, email, phonenumber, qualification, experience, prevorganisation, doj} = req.body
        const user = await pool.query("INSERT INTO employees (firstname, lastname,dob, gender, email,phonenumber, qualification, experience, prevorganisation, doj) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
            [firstname, lastname, dob, gender, email, phonenumber, qualification, experience, prevorganisation, doj])
        res.json(user.rows[0])

    } catch (error) {
        console.log(error.message);
    }
})

app.get('/details', async (req, res) => {
    try {

        const users = await pool.query("SELECT * FROM employees")
        res.json(users.rows)

    } catch (error) {
        console.log(error.message);
    }
})

app.listen(3000, () => {
    console.log('server running');
})
