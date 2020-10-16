const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    //inseri dados na tabela
    
   await saveOrphanage(db, {
            lat:"-27.222633",
            lng:"-49.6555874",
            name:'paz',
            about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            whatsapp:"334444444444",
            images:[
                "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
                "https://images.unsplash.com/photo-1602571833724-984f81111ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(),
            instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            opening_hours:"Horário de visitas Das 18h até 8h",
            open_on_weekends:"0"
        }
    )

    //consulta dados na tabela
    const selectedOrphages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphages);

    //consulta somente um orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1" ')
    console.log(orphanage);

    //deleta dado da tabela
   //console.log( await db.run('DELETE FROM orphanages WHERE id ="4" '));
   //console.log( await db.run('DELETE FROM orphanages WHERE id ="5" '));
})