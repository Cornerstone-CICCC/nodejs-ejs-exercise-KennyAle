import { Router, Request, Response } from "express";

const pageRouter = Router()

pageRouter.get('/', (req: Request, res: Response) => {
    res.status(200).render('index')
})

pageRouter.get('/about', (req: Request, res: Response) => {
    res.status(200).render('about')
})

pageRouter.get('/contact', (req: Request, res: Response) => {
    res.status(200).render('contact')
})


export default pageRouter