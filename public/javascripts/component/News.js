import React, { Component } from 'react';

class News extends Component {
    render() {
        let data = this.props.data;
        const newsTemplate = data.map(function (item, index) {
            return (
                <div key={index}>
                    <p className="news__author">{item.author}:</p>
                    <p className="news__text">{item.title}</p>
                </div>
            )
        });
        return (
            <div className="news">
                {newsTemplate}
            </div>
        );
    }
}

export default News;