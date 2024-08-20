import Vehicle from '../models/vehicle.js';

export async function getVehicle(req, res) {
    try{
        const vehicle = await Vehicle.find();
        res.json(vehicle);
    }catch(error){
        res.staus(500).json({error})
    }
}

export async function postVehicle(req, res) {
    const body = req.body;
    try{
        const vehicle = new Vehicle(body)
        await vehicle.save()
        res.status(201).json('vehicle created successfully');
    }catch(error){
        res.status(500).json(error)
    }
}

export async function putVehicle(req, res) {
    const {plate, color, model} = req.body
    try{
        await Vehicle.findOneAndUpdate({plate:plate},{color: color , model: model})
        res.status(200 ).json('Vehicle updated successfully')
    }catch(error){
        res.status(500).json(error)
    }}
    
export async function deleteVehicle(req, res) {
    const _id = req.params.id
    /* const plate = req.params.plate */
    try{
        await Vehicle.findByIdAndDelete({_id})
        /* await Vehicle.findOneAndDelete({plate:plate}) */
        res.json('Vehicle deleted successfully')

    }catch(error){
        res.status(400).json('Vehicle don´t found')
    }

}