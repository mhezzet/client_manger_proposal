import express from 'express'
import config from 'config'
import logger from './utils/logger'
import database from './utils/database'
import router from './utils/router'
const app = express()

database()
router(app)

app.listen(config.get('PORT'), () => {
  logger.info(
    `🚀  server working @enviroment: ${config.get(
      'env'
    )} and @port: ${config.get('PORT')}`
  )
})
