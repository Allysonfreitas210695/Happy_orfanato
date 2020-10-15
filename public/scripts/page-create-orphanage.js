//create map
const map = L.map('mapid').setView([-27.2056602,-49.6932567], 13);

//create and tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create and and marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icon 
    marker && map.removeLayer(marker)
    
    //add icon  layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
} )


/* photos upload */
function addPhotoField(){
    //pegar o container de photos #images
     const container = document.querySelector('#images')
    //pegar o container para duplica .new-upload
    const filedscontainer = document.querySelectorAll('.new-upload')
    //realizar o clono da ultima imagem adicionada
    const newFieldContainer  = filedscontainer[filedscontainer.length - 1].cloneNode(true)
    //verificar se o campo esta fazio, se sim , nao adicionar ao campo
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao campos
     input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}

function deletefield(event){
 const span  = event.currentTarget

 const filedscontainer = document.querySelectorAll('.new-upload')

 if(filedscontainer.length  <= 1){
     //limpa valor do campo
     span.parentNode.children[0].value = ""
    return
 }

  //deleta o campo
   span.parentNode.remove()
}

//select yes or No

function toggleSelect(event){
    //retira a classe  .active (dos bottons)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    //colocar a calss .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')


    //atualizar o meu input hidden com valor selecionado
    const input = document.querySelector('[name=open_on_weekends]')
    
    input.value = button.dataset.value

    //verificar se sim ou nao
}