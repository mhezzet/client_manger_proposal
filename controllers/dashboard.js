import { Client } from '../models'

export default async function(req, res) {
  const clients = await Client.find({})

  res.render('dashboard', {
    title: 'dashboard',
    email: req.user.email,
    clients
  })
}
