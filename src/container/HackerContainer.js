import React, { useState, useEffect } from 'react'
import HackerList from '../components/HackerList'


const HackerContainer = () => {

    const [articleCodes, setArticleCodes] = useState([])
    const [stories, setStories] = useState([])

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => setArticleCodes(data))
        const promises = (data => data.map(articleCode => fetch(`https://hacker-news.firebaseio.com/v0/item/${articleCode}.json`).then(res => res.json())))
        const story = Promise.all(promises)
        setStories(story)

    }, [])


    // const getStories = async (articleCode) => {
    //     const promises = articleCode.map(articleCode => fetch(`https://hacker-news.firebaseio.com/v0/item/${articleCode}.json`).then(res => res.json()))
    //     const articles = await Promise.all(promises)
    //     setStories(articles)
    //     console.log(articles)
    // }

    return (
        <div>
            <h1>Hello</h1>
            <HackerList stories={stories} />
        </div>

    )
}

export default HackerContainer;