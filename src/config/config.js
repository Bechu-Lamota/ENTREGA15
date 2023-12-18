const config = () => {
  return {
  db_user: process.env.DB_USER,
  db_host: process.env.DB_HOST,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
  logger_mode: process.env.LOGGER_MODE
}
}

module.exports = config