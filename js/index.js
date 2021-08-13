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



