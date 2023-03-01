
import pool from "../configs/connectDB"

let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM users');

    return res.render('index.ejs', { dataUser: rows })
}


let NewUserForm = (req, res) => {
    return res.render("addUser.ejs")
}

let getDetail = async (req, res) => {
    let id = req.params.userId

    const [rows, fields] = await pool.execute("SELECT * from `users` where id = ?", [id])

    return res.send('detail' + JSON.stringify(rows))
}

let CreateNewUser = async (req, res) => {
    let { firstName, lastName, email, phoneNumber } = req.body
    const [rows, fields] = await pool.execute("insert into users(firstName, lastName, email, phoneNumber) values (?,?,?,?)", [firstName, lastName, email, phoneNumber])
    return res.redirect('/')
}


let DeleteUser = async (req, res) => {
    let userId = req.params.idDelete
    const [rows, fields] = await pool.execute("DELETE FROM users WHERE id = ?;", [userId])
    res.redirect('/')
}

let EditUser = async (req, res) => {
    let id = req.params.idEdit

    const [rows, fields] = await pool.execute('SELECT * FROM users where id = ?', [id])

    console.log(rows)
    return res.render("editForm.ejs", { dataUser: rows[0] })
}

let UpdateUser = async (req, res) => {
    let { firstName, lastName, email, phoneNumber, id } = req.body

    const [rows, fields] = await pool.execute("UPDATE users SET firstName = ?, lastName = ?, email = ?, phoneNumber = ? WHERE id = ?",
        [firstName, lastName, email, phoneNumber, id])

    return res.redirect('/')
}


let getAbout = (req, res) => {
    return res.send('tien dat ngu')
}


module.exports = {
    getHomepage,
    getAbout,
    getDetail,
    CreateNewUser,
    NewUserForm,
    DeleteUser,
    EditUser,
    UpdateUser
}