import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/restaurant-mern');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log('Connecté a MongoDB !')
});

mongoose.Promise= global.Promise
export const connect = ()=> mongoose.connect("mongodb://localhost:27017/restaurant-mern", {useNewUrlParser:true})