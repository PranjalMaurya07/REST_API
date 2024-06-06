const mongoose = require('mongoose');

const connect = (url) => {
    mongoose.connect(url)
        .then(() => {console.log('MongoDB connected')}).catch((e) => {console.log('Some error occurred',e)});
}

module.exports = {connect};