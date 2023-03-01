
import express from 'express'
import configViewEngine from './configs/viewEngine.js'
import * as dotenv from 'dotenv'
import initWebRoute from './routers/web'
import connection from './configs/connectDB'

dotenv.config()

const post = process.env.POST || 8080
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//config view engine
configViewEngine(app)

initWebRoute(app)

app.listen(post, () => {
    console.log(`server is running: ${post}`)
})