const news = document.querySelector(".news-inner");
const main = document.querySelector("main");
type Data = { id: number; title: string; text: string }[];
const get = async (url: string): Promise<Data> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
get("https://ts-server-1adb.onrender.com/news").then((data: Data) => {
  console.log(data);
  const arr: Data = Array.from(data);
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
    const target = e.target as HTMLDivElement;
    const newsCard = target.closest(".news-card") as HTMLDivElement;
    window.open("new.html", "_self");
    if (newsCard) {
      console.log(newsCard.id);
      localStorage.setItem("id", newsCard.id);
    }
  });
});
