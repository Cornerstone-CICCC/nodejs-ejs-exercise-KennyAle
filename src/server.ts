import express, {Request, Response} from "express"
import path from "path"
import dotenv from "dotenv"
import pageRouter from "./routes/page.routes"
dotenv.config()

const app = express()

// Setting EJS
app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, '../src/views'))

// Middlewares
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', pageRouter)

// 404
app.use((req: Request, res: Response) => {
    res.status(404).send('Page not found')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})