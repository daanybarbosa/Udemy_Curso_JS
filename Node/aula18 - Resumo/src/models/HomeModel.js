/**
 * HomeModel - trata dos dados / base de dados 
 */

const mongoose = require('mongoose');

//Schema é a modelagem dos dados
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true}, //titulo sera do tipo number e sera obrigatorio
    descricao: String
});

//Model
const HomeModel = mongoose.model('Home', HomeSchema);

class Home{

}

//module.exports = HomeModel;
module.exports = Home;
