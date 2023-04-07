import React, { useEffect, useState } from 'react'
import './Search.scss'
import axios from '../utils/axios'

const Search = () => {
    const [searchKeyWord, setSearchKeyWord] = useState('')
    const [keywordList, setKeywordList] = useState([])

    const searchMostSimilarWords = async () => {
        try {
            let { status, data } = await axios.get(`search?keyword=${searchKeyWord}`)
            if (status === 200 && data.errCode === 0) {
                setKeywordList(data.data)
            } else {
                alert(data.errMessage)
            }
        } catch (error) {
            console.log("🚀 ~ file: Search.jsx:11 ~ searchMostSimilarWords ~ error:", error)
        }
    }

    const handleRemoveKeyWordList = async () => {
        try {
            let { status, data } = await axios.post(`remove`, {
                keywords: keywordList
            })
            if (status === 200 && data.errCode === 0) {
                await searchMostSimilarWords()
            } else {
                alert(data.errMessage)
            }
        } catch (error) {
            console.log("🚀 ~ file: Search.jsx:33 ~ handleRemoveKeyWordList ~ error:", error)
        }
    }

    const hanldeAddKeyword = async () => {
        try {
            let { status, data } = await axios.post(`add`, {
                keyword: searchKeyWord
            })
            if (status === 200 && data.errCode === 0) {
                await searchMostSimilarWords()
            } else {
                alert(data.errMessage)
            }
        } catch (error) {
            console.log("🚀 ~ file: Search.jsx:48 ~ hanldeAddKeyword ~ error:", error)
        }
    }

    useEffect(() => {
        searchMostSimilarWords()
    }, [searchKeyWord])

    return (
        <div className="search-container">
            <div className="search-header-container">
                <h1 className="title">Search Corpus</h1>
            </div>
            <div className="search-body-container">
                <div className={`search-input-container ${keywordList.length === 0 ? 'border-radius-bottom' : ''}`}>
                    <input value={searchKeyWord}
                        onChange={(e) => setSearchKeyWord(e.target.value)}
                        className='search-input' type="text" placeholder='Search key word...'></input>
                    <div className="btn-container">
                        <button className='btn-add' onClick={() => hanldeAddKeyword()}>Add</button>
                        <button className='btn-remove' onClick={() => handleRemoveKeyWordList()}>Remove</button>
                    </div>
                </div>
            </div>
            <div className='search-footer-container'>
                {keywordList && keywordList.map((keyword, index) => {
                    return (
                        <div className='result-container' key={index}>
                            <p>
                                {keyword}
                            </p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Search