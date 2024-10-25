const mongoose = require("mongoose");

const kategoriScehema = new mongoose.Scehema({
    nama_kategori:{
        type:String,
    },
    deskripsi:{
        type:String,
    },
    created_at:{
        type:Date,
        
    },
    updated_at:{
        type:Date,
        
    },
    status:{
        type:Boolean,
       
    },
    
    
    
});
const kategori = mongoose.model('kategori',kategoriSchema);
module.exports = kategori