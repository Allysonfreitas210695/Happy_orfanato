//create map
const map = L.map('mapid').setView([-27.2056602,-49.6932567], 13);

//create and tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarket({id, name, lat, lng}){

    //create popup
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="orphanage?id=${id}" ><img src="/images/arrow-white.svg"> </a>`)


    //create and and marker
    L.marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanageSpan = document.querySelectorAll('.orphanages span')

orphanageSpan.forEach(span => {
    const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
    }

    addMarket(orphanage)
})

