"use strict";

async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET'
    });
    return response.json();
}

getData('https://thecrew.cc/news/read.php')
    .then(data => {
        let array = Array(10);
        let htmlString = "<article>";
            for (let i = 0; i < array.length; i++) {
            htmlString += `
                <article>
                    <div class="content">
                        <div>
                            <h1>${data.news[i].title}</h1>
                            <img src="${data.news[i].imageURI}">
                            <p>${data.news[i].content}</p>
                            <button>
                            <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDE2IDE2IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0wIDF2OGMwIC41NTIyNDYuNDQ3NjkzIDEgMSAxaDN2LTEwaC0zYy0uNTUyMzA3IDAtMSAuNDQ3NjkzLTEgMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNSkiLz48cGF0aCBkPSJtOS4xNTMzMiA1LjAyOTc5aC0yLjk1NDFjLS4yNTgzMDEgMC0uMzg3Njk1LS4xNzIzNjMtLjQzMTE1Mi0uMjQ2NTgyLS4wNDM0NTctLjA3MzczMDUtLjEzMTM0OC0uMjcwNTA4LS4wMDYzNDc3LS40OTYwOTRsMS4wNDE1LTEuODc1NDljLjIyODUxNi0uNDEwNjQ1LjI1MTk1My0uODkzNTU1LjA2NDk0MTQtMS4zMjQ3MS0uMTg3MDEyLS40MzE2NC0uNTU2MTUyLS43NDQ2MjktMS4wMTI3LS44NTgzOThsLS43MzQzNzUtLjE4MzU5NGMtLjE3ODcxMS0uMDQ0OTIxOS0uMzY4MTY0LjAxMjIwNzEtLjQ5MjY3Ni4xNTAzOTFsLTMuOTg3MyA0LjQyOTY5Yy0uNDEzNTc0LjQ2MDQ0OS0uNjQxMTEzIDEuMDU0Mi0uNjQxMTEzIDEuNjcyMzZ2NS4yMzI0MmMwIDEuMzc4NDIgMS4xMjE1OCAyLjUgMi41IDIuNWw0Ljk3NDEyLS4wMDA0ODgzYzEuMTIzMDUgMCAyLjExNDc1LS43NTYzNDggMi40MTExMy0xLjgzODg3bDEuMDY3MzgtNC44OTg0NGMuMDMxMjUtLjEzNjIzLjA0NzM2MzMtLjI3NTg3OS4wNDczNjMzLS40MTU1MjcgMC0xLjAxODA3LS44Mjg2MTMtMS44NDY2OC0xLjg0NjY4LTEuODQ2Njh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1IC45NykiLz48L3N2Zz4=">
                            ${data.news[i].likes}
                            </button>
                        </div>
                    </div>
                </article>
            `
            htmlString += "</article>";

        }

        document.getElementById('container').innerHTML = htmlString;


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



// async function loadAsync() {
//     const artikelResponse = await fetch('https://thecrew.cc/news/create.php')
// }