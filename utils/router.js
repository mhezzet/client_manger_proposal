import { admin, notAdmin } from '../middlewares'
import express from 'express'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'
import config from 'config'
import {
  dashboard,
  register,
  newAdmin,
  login,
  signIn,
  logout,
  newClient,
  createClient,
  deleteClient,
  editClient,
  updateClient,
  client,
  addService,
  newService,
  removeService,
  editService,
  updateService
} from '../controllers'

export default function(app) {
  if (config.get('env') === 'production') {
    app.use(helmet())
    app.use(compression())
  }
  app.set('view engine', 'ejs')
  app.use(cookieParser())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.static('public'))
  app.get('/', admin, dashboard)
  app.get('/register', notAdmin, register)
  app.get('/login', notAdmin, login)
  app.post('/register', newAdmin)
  app.post('/login', signIn)
  app.get('/logout', admin, logout)
  app.get('/newclient', admin, newClient)
  app.post('/newclient', admin, createClient)
  app.post('/updateclient/:id', admin, updateClient)
  app.get('/client/delete/:id', admin, deleteClient)
  app.get('/client/edit/:id', admin, editClient)
  app.get('/client/:id', admin, client)
  app.get('/service/add/:id', admin, addService)
  app.get('/deleteservice/:id', admin, removeService)
  app.post('/newservice/:id', admin, newService)
  app.get('/service/edit/:id', admin, editService)
  app.post('/updateservice/:id', admin, updateService)
}
