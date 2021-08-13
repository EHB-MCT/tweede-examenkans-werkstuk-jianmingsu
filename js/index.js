"use strict";

async function getData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'GET'
    });
    return response.json();
}

getData('https://thecrew.cc/news/read.php')
    .then(data => {
        console.log(data);
    });

class Artikels {
    constructor(articleID, articleTitle, articleContent, articleImageURL, articleLikes, articleDate) {
        this._articleID = articleID,
        this._articleTitle = articleTitle,
        this._articleContent = articleContent,
        this._articleImageURL = articleImageURL,
        this._articleLikes = articleLikes,
        this._articleDate = articleDate
    }

    get articleID() {
        return this._articleID
    }

    set articleID(id) {
        this._articleID = id
    }

    get articleTitle() {
        return this._articleTitle
    }

    set articleTitle(title) {
        this._articleTitle = title
    }

    get articleContent() {
        return this._articleContent
    }

    set articleContent(content) {
        this._articleContent = content
    }

    get articleImageURL() {
        return this._articleImageURL
    }

    set articleImageURL(url) {
        this._articleImageURL = url
    }

    get articleLikes() {
        return this._articleLikes
    }

    set articleLikes(likes) {
        this._articleLikes = likes
    }

    get articleDate() {
        return this._articleDate
    }

    set articleDate(date) {
        this._articleDate = date
    }
}

