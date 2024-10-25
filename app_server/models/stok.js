const mongoose = require("mongoose");

const stokScehema = new mongoose.Scehema({
    produk_id:{
        type:mongoose.Scehema.Type.ObjectId,
        ref:'produk',
        require:true,
    },
    jumlah:{
        type:Number,
    },
    tanggal:{
        type:Date,
        
    },
    tanggal_update:{
        type:Date,
        
    },
    ket:{
        type:String,
        
    },
    lokasi:{
        type:String,
        
    },
    
    
    
    
});
const stok = mongoose.model('stok',stokSchema);
module.exports = stok;