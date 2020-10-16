const DataBase = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    index(req, res){
        return res.render('index')
    },

   async orphanage(req, res){
       const id = req.query.id

        try{
          const db = await DataBase;
          const results = await db.all(`SELECT * FROM orphanages WHERE id = ${id} `)
          const orphanage = results[0]

          orphanage.images = orphanage.images.split(",")
          orphanage.firstImage = orphanage.images[0]


          return res.render('orphanage', {orphanage})

        }catch(error){

            console.log(error);
            return res.send('erro no banco de dados!')
        } 
    },

    async orphanages(req, res){
        try{
            const db = await DataBase;
            const orphanages = await db.all('SELECT * FROM orphanages')
            return res.render('orphanages', {orphanages})

        }catch(error){
            console.log(error);
            return res.send('erro no banco de dados!')
        }
        
    },
 
    createOrphanage(req, res){
        return res.render('create-orphanage')
    }

}


