 const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=30`

 const fetchData = async () => {
     try {
         const response = await fetch(url)
         const data = await response.json()
         console.log(data);
     }
     catch (err) {
        console.log(err);
     }
 }

 fetchData()