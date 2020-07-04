module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    'User',
    {
      userid: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      userpw: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(255),
      },
      grant: {
        type: Sequelize.INTEGER(2),
        defaultValue: 2,
      },
      api: {
        type: Sequelize.STRING(50),
      },
      api_id: {
        type: Sequelize.STRING(50),
      },
      api_token: {
        type: Sequelize.STRING(255),
      },
    },
    {
      timestamp: true,
      charset: 'utf8',
      tableName: 'user',
    },
  );
};
