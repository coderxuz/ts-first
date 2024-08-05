"use strict";
const news = document.querySelector(".news-inner");
const main = document.querySelector("main");
const get = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.error(err);
        return [];
    }
};
get("https://ts-server-1adb.onrender.com/news").then((data) => {
    console.log(data);
    const arr = Array.from(data);
    arr.map((item) => {
        const newsCard = document.createElement("div");
        news?.appendChild(newsCard);
        newsCard.classList.value = "news-card";
        newsCard.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.text}</p>
        `;
        newsCard.id = item.id.toString();
    });
    news?.addEventListener("click", (e) => {
        const target = e.target;
        const newsCard = target.closest(".news-card");
        window.open("new.html", "_self");
        if (newsCard) {
            console.log(newsCard.id);
            localStorage.setItem("id", newsCard.id);
        }
    });
});
