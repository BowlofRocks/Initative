const Sequelize = require('sequelize');
const sequelize = new Sequelize('initiative', 'postgresadmin', 'KastovKool-Aid', {
    host: 'test-db.c5ifhyanqyoz.us-west-2.rds.amazonaws.com',
    dialect: 'postgres'
});

const User = sequelize.define('user', {
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})

const Campaign = sequelize.define('campaign', {
    campaign_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    campaign_name: {
        type: Sequelize.DataTypes.STRING
    }
})

const Players = sequelize.define('players', {
    player_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    player_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    player_initiative: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    player_health: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
})

const nonPlayerCast = sequelize.define('non_player_cast', {
    cast_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cast_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    cast_initiative: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    cast_health: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
})