require('dotenv').config()
import express from 'express'
import { parsingResponse, corsProcessing } from './middlewares/common'
import mainRouter from './routes/mainRouter'

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error occurred, server can't start`, error)
    } else {
        console.log(`Listening on port ${PORT}`)
    }
});

parsingResponse(app)
corsProcessing(app)

mainRouter(app)

