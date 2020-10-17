const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//get valeus form html 
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//create map
const map = L.map('mapid', options).setView([lat, lng], 13);

//create and tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//create and and marker


L.marker([lat,lng], {icon})
.addTo(map)


/* image gallery*/

function selectImage(event){
    const button = event.currentTarget
    
    /*remove todas classes actives*/
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove('active')
    }

    //seleciona a imagem clicada 
     const image = button.children[0]
     const imageContent = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContent.src = image.src

    //adicionar a classe  .activer para este botao
    button.classList.add('active')
}

