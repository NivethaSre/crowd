module.exports = {
    jwtSecret: "your secret key",
    mongourl: process.env.MONGO_URI || "mongodb+srv://nivi:0000@cluster0.nv4xs.mongodb.net/crowd?retryWrites=true&w=majority"
};
