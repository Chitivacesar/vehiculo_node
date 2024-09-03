import express from 'express';
import 'dotenv/config'
import dbconection from '../database/config.js';
import {getVehicle, postVehicle, putVehicle, deleteVehicle} from '../controllers/vehicleControllers.js';
import { getOwner, postOwner, putOwner, deleteOwner } from '../controllers/ownerController.js';
import { createUser } from '../controllers/userController.js';

export default class server {
  constructor() {
    this.app = express();
    this.listen();
    this.dbconect();
    this.pathVehicle = '/api/vehicle';
    this.pathOwner = '/api/owner';

    this.route();
  
}
listen(){
    this.app.listen(process.env.PORT, () => {
        console.log(`el servidor est corriendo en  ${process.env.PORT}`);
});
}
async dbconect(){
    await dbconection()

}
route(){
    this.app.use(express.json())
    this.app.get(this.pathVehicle,getVehicle)
    this.app.post(this.pathVehicle,postVehicle)
    this.app.put(this.pathVehicle,putVehicle)
    this.app.delete(this.pathVehicle+('/:id'),deleteVehicle)
    this.app.get(this.pathOwner,getOwner)
    this.app.post(this.pathOwner,postOwner)
    this.app.put(this.pathOwner,putOwner)
    this.app.delete(this.pathOwner+('/:id'),deleteOwner)
    this.app.post('/api/user',createUser)
}
}