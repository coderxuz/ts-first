const mainTtop = document.querySelector(".main-top") as HTMLDivElement;
const mainTBottom = document.querySelector(".main-bottom") as HTMLDivElement;
const get1 = async (url: string): Promise<Data> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
get1("https://ts-server-1adb.onrender.com/news").then((data: Data) => {
  const id = localStorage.getItem("id");
  if (id) {
    for (let item of data) {
      if (item.id.toString() === id) {
        mainTtop.innerHTML = `
                <h1>${item.title}</h1>
                <p>${item.text}</p>
                `;
      } else {
        const newsCard = document.createElement("div");
        mainTBottom?.appendChild(newsCard);
        newsCard.classList.value = "news-card";
        newsCard.innerHTML = `
    <h2>${item.title}</h2>
    <p>${item.text}</p>
        `;
        newsCard.id = item.id.toString();
      }
    }
  }
});
