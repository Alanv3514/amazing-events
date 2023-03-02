
function generateCardss(image, name, description, price) {
    htmlEvents += `<div class="col-12 col-md-6 col-lg-3" >
<div class="card h-100 m-4 m-md-0 m-lg-0" >
<img src="${image}" height="180" class="m-2" alt=""> 
    <div class="card-body d-flex flex-column align-items-center justify-content-between">
        <h3 class="card-title">${name}</h3>
        <p class="card-text">${description}</p>
        <div class="d-flex w-75 gap-3 justify-content-between">
            <p>Price: $${price}</p>
            <a href="./details.html" class="btn btn-primary ">Ver Mas</a>
        </div>
    </div>
</div>
</div>`;
};



const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const cardContainer = document.getElementById('cardi');

function filterCards() {
    const searchValue = searchInput.value.toLowerCase();
    const cards = cardContainer.querySelectorAll('.card');
    cards.forEach(card => {
        const name = card.querySelector('.card-title').textContent.toLowerCase();
        if (name.includes(searchValue)) {
            card.parentElement.classList.remove("oculto");
            card.classList.remove("oculto");
        } else {
            card.parentElement.classList.add("oculto")
            card.classList.add("oculto")
        }
    });
}

searchButton.addEventListener('click', filterCards);
searchInput.addEventListener('input', filterCards);






