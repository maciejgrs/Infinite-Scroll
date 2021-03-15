 const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=30`
 const imageContainer = document.querySelector('.image-container')
 let arr

 const fetchData = async () => {
     try {
         const response = await fetch(url)
         arr = await response.json()
         displayImages()
         
     }
     catch (err) {
        console.log(err);
     }
 }

 fetchData()

 const displayImages = () => {
    arr.forEach(object => {
        const img = document.createElement('img')
        img.setAttribute('src', object.urls.regular)
        imageContainer.appendChild(img)
    }
        )
 }
 