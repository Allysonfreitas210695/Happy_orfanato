//importa biblioteca
const express = require('express');

const path = require('path');

const pages = require('./pages.js')

//iniciando biblioteca
const server = express();

server
.use(express.static('public'))

//configurar templantes engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
//ligar o servidor
server.listen(5500)

