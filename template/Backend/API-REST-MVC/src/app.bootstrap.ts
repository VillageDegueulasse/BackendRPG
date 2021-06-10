/* eslint-disable no-console */

import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { UserController } from './controllers/user.controller';
import { apiUserRouter } from './routers/apiUser.routes';
import { json } from 'body-parser';
import { PersonnageController } from './controllers/personnage.controller';
import { HeroesController } from './controllers/heroes.controller';
import { apiPersonnageRouter } from './routers/apiPersonnage.routes';
import { apiHeroesRouter } from './routers/apiHeroes.routes';
import { MonstersController } from './controllers/monsters.controller';
import { apiLootRouter } from './routers/apiLoots.routes';
import { LootController } from './controllers/loots.controller';
import { apiMonsterRouter } from './routers/apiMonsters.routes';
import { DialogueController } from './controllers/dialogue.controller';
import { InventaireController } from './controllers/inventaire.controller';
import { PnjController } from './controllers/pnj.controller';
import { StuffController } from './controllers/stuff.controller';
import { stuffRouter } from './routers/apiStuff.routes';
import { dialogueRouter } from './routers/apiDialogue.routes';
import { inventaireRouter } from './routers/apiInventaire.routes';
import { pnjRouter } from './routers/apiPnj.routes';
import { MapController } from './controllers/map.controller';
import { apiMapRouter } from './routers/apiMap.routes';
import { PartieController } from './controllers/partie.controller';
import { apiPartieRouter } from './routers/apiPartie.routes';
import { ErrorMiddleware } from './middlewares/Errors';





createConnection().then(async connection => {
   
  

    const app = express();
    const port = 8000;
    app.use(json());
    
    app.get('/', (req : Request, res : Response) => {
        res.send('isoké');
    });  
    
    
    
    app.use(apiUserRouter);
    app.use(apiPersonnageRouter);
    app.use(apiHeroesRouter);
    app.use(apiLootRouter);
    app.use(apiMonsterRouter);
    app.use(stuffRouter);
    app.use(dialogueRouter);
    app.use(inventaireRouter);
    app.use(pnjRouter);
    app.use(apiMonsterRouter);
    app.use(apiMapRouter);
    app.use(apiPartieRouter);
    
    UserController.init();
    PersonnageController.init();
    HeroesController.init();
    MonstersController.init();
    LootController.init();
    DialogueController.init();
    InventaireController.init();
    PnjController.init();
    StuffController.init();
    PersonnageController.init();
    MapController.init();
    PartieController.init();

    //ERROR
    //NotFOund
    app.use(ErrorMiddleware.notFound);
    //app error
    app.use(ErrorMiddleware.appError);

    if(connection){              
        app.listen(port, () => {
            console.log(`localhost a démarré sur : http://localhost:${port}`);
            
        });
        console.log('Database sycronize');
     } else {
        console.log('il y a problème');        
     }
     
    
}).catch(error => console.log(error));

