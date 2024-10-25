const Produk = require("../models/mahasiswa");
Const.ProdukIndex = async(req,res) =>{
    try {
        const Produk = await Mahasiswa.find({});
        res.status(200).json(message:'Success');
        if(!mahasiswas){
            res.status(400).json ({message : "Collection is Empty"})
        }
       }catch (error){
        res.status(500).json({message : "Error retrieving users", error});
       }
}