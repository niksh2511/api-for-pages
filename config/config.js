const config = {
    PORT: process.env.PORT || 4000,
    DB_URL: process.env.DB_URL || "mongodb://127.0.0.1:27017/EmiCalculator",
    secretKey: process.env.SECRET_KEY || "emilogic",
    algorithm: process.env.ALGORITHM || 'HS256', //default:HS255
}

module.exports = config;
