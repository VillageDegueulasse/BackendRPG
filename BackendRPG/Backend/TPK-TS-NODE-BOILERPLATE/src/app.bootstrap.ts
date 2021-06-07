/* eslint-disable no-console */

import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';





createConnection().then(async connection => {
   
    
    const app = express();
    const port = 8000;
    app.get('/rpg', (req : Request, res : Response) => {
        res.send('isoké');
    });
    
    

    if(connection){              
        app.listen(port, () => {
            console.log(`localhost a démarré sur : http://localhost:${port}`);
            
        });
        console.log('Database sycronize');
    } else {
        console.log('il y a problème');        
    }
    
}).catch(error => console.log(error));

