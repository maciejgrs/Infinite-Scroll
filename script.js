const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=30`;
const imageContainer = document.querySelector(".image-container");
let arr;

const fetchData = async () => {
  try {
    const response = await fetch(url);
    arr = await response.json();
    displayImages();
  } catch (err) {
    console.log(err);
  }
};

fetchData();

const setAttribute = (element, atr) => {
  for (const key in atr) {
    element.setAttribute(key, atr[key]);
  }
};
 
const displayImages = () => {
  arr.forEach((object) => {
    const item = document.createElement("a");
    setAttribute(item, {
      href: object.links.html,
      target: "_blank",
    });
    const img = document.createElement("img");
    setAttribute(img, {
      src: object.urls.regular,
      alt: object.alt_description,
      title: object.alt_description,
    });
    item.appendChild(img);
    imageContainer.appendChild(item)
  });
};
 