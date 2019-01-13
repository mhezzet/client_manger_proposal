import { admin, notAdmin } from '../middlewares'
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
  updateClient
} from '../controllers'
import express from 'express'
import cookieParser from 'cookie-parser'

export default function(app) {
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
}
