const mongoose = require('mongoose');
const DestinoSchema = mongoose.Schema(
{
    lugar: {
        type:String,
        required: [true,'El lugar es obligatorio']
    },
    zona: {
        type:String,
        required: [true,'La zona es obligatoria']
    },
    imagen: {
        type:String
    },
}
)
//sobreescribimos un método del Schema para modificar el objeto que exporta
DestinoSchema.methods.toJSON = function() {
    const { _id,...destino} = this.toObject() ;
    destino.id=_id;
    return destino;
}

let Destino = mongoose.model('Destino',DestinoSchema);
module.exports = Destino;