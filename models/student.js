module.exports = (sequelize, Sequelize) => {
    return sequelize.define('student', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: Sequelize.STRING,
        avatar: Sequelize.STRING
    })
}