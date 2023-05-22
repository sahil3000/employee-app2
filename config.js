require('dotenv').config()
const config = {
    port: 5000,
    mongooseURL: `${process.env.MONGOOSEURL}`
}
module.exports = config;