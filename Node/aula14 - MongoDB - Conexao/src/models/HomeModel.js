const mongoose = require('mongoose');

//Schema é a modelagem dos dados
const HomeSchema = new mongoose.Schema({
    //ira escrever os tipos de dados que querem q sejam inseridos 
    //titulo: String
    //titulo: Number
    titulo: {type: String, required: true}, //titulo sera do tipo number e sera obrigatorio
    descricao: String
});

//Model
const HomeModel = mongoose.model('Home', HomeSchema);

class Home{

}

//ßmodule.exports = HomeModel;
module.exports = Home;
