/* eslint-disable no-console */

import express from 'express';
import { json } from 'body-parser';
import { createConnection } from 'typeorm';
import { PnjController } from './controllers/pnj.controller';
import { pnjRouter } from './routes/pnj.route';
import { inventaireRouter } from './routes/inventaire.route';
import { InventaireController } from './controllers/inventaire.controller';
import { DialogueController } from './controllers/dialogue.controller';
import { dialogueRouter } from './routes/dialogue.route';
import { StuffController } from './controllers/stuff.controller';
import { stuffRouter } from './routes/stuff.route';





createConnection().then(async connection => {
   
    const app = express();
    const port = 8000;
    
    app.use(json());

    app.use(pnjRouter);
    app.use(inventaireRouter);
    app.use(dialogueRouter);
    app.use(stuffRouter);

    PnjController.init();
    InventaireController.init();
    DialogueController.init();
    StuffController.init();

    if(connection){              
        app.listen(port, () => {
            console.log(`localhost a démarré sur : http://localhost:${port}`);
            
        });
        console.log('Database sycronize');
    } else {
        console.log('il y a problème');        
    }
    
}).catch(error => console.log(error));

