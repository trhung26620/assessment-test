const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', '..', '..', 'corpus', 'hemingway.txt');

const corpusLoader = () => {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const keywords = fileContent.match(/\w+/g);
        const uniqueKeywords = new Set(keywords);
        return uniqueKeywords
    } catch (error) {
        throw error;
    }
}

const appendKeyword = async (keyword) => {
    try {
        await fs.appendFile(filePath, ` ${keyword}`, err => {
            if (err) {
                throw err
            }
        });
    } catch (error) {
        throw error;
    }
}

const removeKeyword = (keywords) => {
    let corpus = fs.readFileSync(filePath, 'utf8');
    for (let i = 0; i < keywords.length; i++) {
        let regex = new RegExp(`\\b${keywords[i]}\\b`, 'g');
        corpus = corpus.replace(regex, '');
    }
    fs.writeFileSync(filePath, corpus, 'utf8');
}

module.exports = { corpusLoader, appendKeyword, removeKeyword }
