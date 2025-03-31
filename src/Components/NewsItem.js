import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description} = this.props;
    return (
      
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0130%2Fr1445405_2_1296x729_16%2D9.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
