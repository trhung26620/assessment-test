
import express from 'express';
import cors from 'cors';
require('dotenv').config()

const parsingResponse = (app) => {
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true, limit: '50mb' }));
}

const corsProcessing = (app) => {
    var corsOptions = {
        origin: process.env.URL_REACT,
        optionsSuccessStatus: 200,
        credentials: true
    }
    app.use(cors(corsOptions));
}

module.exports = { parsingResponse, corsProcessing }