import mainServices from '../services/mainService'

const searchMostSimilarWords = async (req, res) => {
    try {
        let data = await mainServices.searchMostSimilarWords(req.query)
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Error from the server'
        })
    }
}

const appendKeywordToCorus = async (req, res) => {
    try {
        let data = await mainServices.appendKeywordToCorus(req.body)
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Error from the server'
        })
    }
}

const removeKeywordFromCorus = async (req, res) => {
    try {
        let data = await mainServices.removeKeywordFromCorus(req.body)
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports = {
    searchMostSimilarWords, appendKeywordToCorus, removeKeywordFromCorus
}