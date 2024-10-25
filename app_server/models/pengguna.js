const mongoose = require("mongoose");

const penggunaScehema = new mongoose.Scehema({
    nama:{
        type:String,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        
    },
    alamat:{
        type:String,
        
    },
    Tanggal_daftar:{
        type:Date,
       
    },
    
    
    
});
const pengguna = mongoose.model('pengguna',penggunaSchema);
module.exports = pengguna;