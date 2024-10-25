const mongoose = require("mongoose");

const penggunaScehema = new mongoose.Scehema({
    produk_id:{
        type:mongoose.Scehema.Type.ObjectId,
        ref:'produk',
        require:true,
    },
    presentase:{
        type:Number,
    },
    tanggal:{
        type:Date,
        
    },
    tanggal_selesai:{
        type:Date,
        
    },
    ket:{
        type:String,
       
    },
    
    
    
});
const dskon = mongoose.model('diskon',diskonSchema);
module.exports = diskon;