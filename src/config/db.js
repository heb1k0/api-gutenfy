const { Sequelize } = require('sequelize');


const connect = async () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: "postgres",
    }
  );

  try {
    await sequelize.authenticate();
    console.log("Gutenfy DB Conection.");
  } catch (error) {
    console.error("Unable Gutenfy DB Authentication:", error);
    throw error;
  }
}

module.exports = connect;