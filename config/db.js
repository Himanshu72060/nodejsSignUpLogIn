const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://himanshusharma00898:LsM2lXaiRQF2tqLf@cluster0.rcmy5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
