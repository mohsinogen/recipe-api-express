const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect();
        console.log('MongoDB connected'+ conn.connection.host);
    } catch (error) {
        console.log('Failed:'+error);
    }
}

module.exports = {connectDB}