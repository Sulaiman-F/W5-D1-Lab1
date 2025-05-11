let container = document.getElementById("container");



fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        data.results.forEach(element => {
            const card = document.createElement("div");
            card.classList.add("card");
            const h1 = document.createElement("h1");
            h1.innerText = element.name;
            const img = document.createElement("img");
            img.src = element.image;
            img.classList.add("card-img");
            card.appendChild(h1);
            card.appendChild(img);
            container.appendChild(card);
        });
    })
