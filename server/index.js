const Sequelize = require('sequelize');
const sequelize = new Sequelize('initiative', 'postgresadmin', 'KastovKool-Aid', {
    host: 'test-db.c5ifhyanqyoz.us-west-2.rds.amazonaws.com',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log('Connected')
}).catch((err) => {
    console.log(err)
});