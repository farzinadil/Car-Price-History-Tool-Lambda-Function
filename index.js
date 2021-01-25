require('dotenv').config();
mongoose = require('mongoose'), Vehicle = require('./models/car');
var mongoose = require('mongoose'),
Vehicle = mongoose.model('Vehicles');

const mongourl = process.env.DB_Connection;
const main = async (event) => {
    console.log('Event: ' + event);
    const {id} = event;
    let vehiclePriceHistory =  {};
    mongoose.Promise = global.Promise;
    await mongoose.connect(mongourl,{useNewUrlParser: true}, {useUnifiedTopology: true})
    .then(client =>{ console.log("Connection success"); })
    .catch(err => console.error('Connection error', err));
    return Vehicle.findOne({vehicleID: id}, function(err, task) {
        if (err)
          return err
        console.log(task.pricehistory);
        return (task.pricehistory);
      });
    
}
exports.handler = main;