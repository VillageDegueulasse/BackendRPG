/* eslint-disable no-console */

import express, { Request, Response } from 'express';
import { createConnection, getRepository } from 'typeorm';
import { UserController } from './controllers/user.controller';
import { User } from './models/user.model';
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





createConnection().then(async connection => {
   
    UserController.init();
    PersonnageController.init();
    HeroesController.init();
    MonstersController.init();
    LootController.init();
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

    if(connection){              
        app.listen(port, () => {
            console.log(`localhost a démarré sur : http://localhost:${port}`);
            
        });
        console.log('Database sycronize');
     } else {
        console.log('il y a problème');        
     }
     
    
}).catch(error => console.log(error));

