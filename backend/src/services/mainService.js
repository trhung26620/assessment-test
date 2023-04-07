import { corpusLoader, appendKeyword, removeKeyword } from '../utils/fileUtil'
import handleResponseCode from '../configs/responseCode'
const natural = require('natural');

const getTreeMostSimilarKeywords = (keyword, keywordSet, numberOfKeyword) => {
    try {
        let distances = Array.from(keywordSet).map(kw => ({
            kw,
            distance: natural.JaroWinklerDistance(keyword, kw, { ignoreCase: true }),
        }))
        distances.sort((a, b) => b.distance - a.distance)
        const mostSimilarKeywords = distances.slice(0, numberOfKeyword).map(obj => obj.kw);
        return mostSimilarKeywords;

    } catch (error) {
        throw (error)
    }

}
const searchMostSimilarWords = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if ('keyword' in data) {
                if (data.keyword) {
                    let keywordSet = corpusLoader()
                    if (keywordSet) {
                        let res = getTreeMostSimilarKeywords(data.keyword, keywordSet, 3)
                        resolve({
                            ...handleResponseCode(0),
                            data: res
                        })
                    } else {
                        resolve(handleResponseCode(3))
                    }
                } else {
                    resolve({
                        ...handleResponseCode(0),
                        data: []
                    })
                }
            } else {
                resolve(handleResponseCode(2))
            }

        } catch (error) {
            reject(error);
        }
    })
}

const appendKeywordToCorus = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if ('keyword' in data) {
                if (data.keyword) {
                    await appendKeyword(data.keyword)
                    resolve(handleResponseCode(0))
                } else {
                    resolve(handleResponseCode(0))
                }
            } else {
                resolve(handleResponseCode(2))
            }

        } catch (error) {
            reject(error);
        }
    })
}

const removeKeywordFromCorus = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if ('keywords' in data) {
                if (data.keywords && data.keywords.length === 3) {
                    await removeKeyword(data.keywords)
                    resolve(handleResponseCode(0))
                } else {
                    resolve(handleResponseCode(0))
                }
            } else {
                resolve(handleResponseCode(2))
            }
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    searchMostSimilarWords, appendKeywordToCorus, removeKeywordFromCorus
}