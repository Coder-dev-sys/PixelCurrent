import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor () {
    super();
    this.state= {
      articles: [],
      loading: false
    }
  }
  async componentDidMount() {
    let url="https://newsapi.org/v2/everything?q=tesla&from=2025-03-11&sortBy=publishedAt&apiKey=2f12bb8d5ffe4ff181d52c2f2bf509e4";
    let data=await fetch(url);
    let parsedData=await data.json()
    if(parsedData.articles) {
      this.setState({articles: parsedData.articles})
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>PixelCurrent Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return  <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title? element.title: ""} description={ element.description? element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
