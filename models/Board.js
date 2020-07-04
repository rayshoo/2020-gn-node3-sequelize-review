module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    'Board',
    {
      // idx: {
      //   type: Sequelize.INTEGER(11),
      //   primarykey: true,
      //   autoIncrement: true
      // },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT(),
      },
      writer: {
        type: Sequelize.STRING(20),
      },
      readnum: {
        type: Sequelize.INTEGER(11),
        defaultValue: 0,
      },
      oriname: {
        type: Sequelize.STRING(255),
      },
      savename: {
        type: Sequelize.STRING(255),
      },
    },
    {
      timestamp: true,
      charset: 'utf8',
      tableName: 'seqboard2',
    },
  );
};
