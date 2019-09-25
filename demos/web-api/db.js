const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    logging: true,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    define: {
      timestamps: true,
      paranoid: true,
      freezeTableName:true,
      scopes:{
        common: {
          attributes:{
            exclude:['updated_at','deleted_at','created_at']
          }
        }
      }
    }
  }
)

const connect = async () => {
  console.log('> start')
  await sequelize.sync({ force: true })

  console.log('> connected')
  await sequelize.authenticate()

  console.log('=> Created a new connection.')
}

module.exports = {
  sequelize,
  connect
}
