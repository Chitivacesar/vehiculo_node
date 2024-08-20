

export async function getOwner(req, res) {
    try{
        const owner = await Owner.find();
        res.json(owner);
    }catch(error){
        res.staus(500).json({error})
    }
}

export async function postOwner(req, res) {
    const body = req.body;
    try{
        const owner = new Owner(body)
        await owner.save()
        res.status(201).json('owner created successfully');
    }catch(error){
        res.status(500).json(error)
    }
}

export async function putOwner(req, res) {  
    const {name, phone, email} = req.body
    try{
        await Owner.findOneAndUpdate({name:name},{phone: phone , email: email})
        res.status(200 ).json('Owner updated successfully')
    }
    catch(error){
        res.status(500).json(error)
    }
}


export async function deleteOwner(req, res) {
    const _id = req.params.id
   
    
    try{
        await Vehicle.findByIdAndDelete({_id})
        res.json('Owner deleted successfully')
    
    }catch(error){
        res.status(400).json('Owner don´t found')
    }}
