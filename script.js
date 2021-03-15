let totalImages = 30;
const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${totalImages}`;
const imageContainer = document.querySelector(".image-container");
const loader = document.querySelector("#loader");
let arr;
let imagesLoaded = 0;

let ready = false;
const fetchData = async () => {
  try {
    const response = await fetch(url);
    arr = await response.json();
    displayImages();
  } catch (err) {
    console.log(err);
  }
};

const imageLoaded = () => {
  imagesLoaded++;

  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
};
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

    img.addEventListener("load", imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    imagesLoaded = 0;
    fetchData();
  }
});

fetchData();
