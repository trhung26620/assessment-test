import express from 'express';
import mainController from '../controllers/mainController'

const router = express.Router();

const mainRouter = (app) => {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    router.get('/search', mainController.searchMostSimilarWords)
    router.post('/add', mainController.appendKeywordToCorus)
    router.post('/remove', mainController.removeKeywordFromCorus)
    app.use('/', router);
};
export default mainRouter;