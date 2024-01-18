import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {

  const [articles,setArticles] = useState([])
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api_key}`
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));

  },[category])
  return (
    <div className="container">
      <h2 className='text-center my-3'>Latest <span className='badge bg-info'>News</span></h2>
      <div className="row">
        {articles.map((news, index) => (
          <div key={index} className="col-md-4 mb-4">
            <NewsItem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsBoard
