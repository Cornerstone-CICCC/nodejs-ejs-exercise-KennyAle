"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
pageRouter.get('/', (req, res) => {
    res.status(200).render('index');
});
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about');
});
pageRouter.get('/contact', (req, res) => {
    res.status(200).render('contact');
});
exports.default = pageRouter;
