const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})

jwt.verify(token, process.env.JWT_SECRET)