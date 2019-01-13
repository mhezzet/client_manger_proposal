import { Client } from '../models'
import mongoose from 'mongoose'

export default async function(req, res) {
  const ObjectId = mongoose.Types.ObjectId.isValid(req.params.id)
  if (!ObjectId) res.send('invalid object id')

  const client = await Client.findOneAndRemove({ _id: req.params.id })
  if (!client) res.send('no such a client')

  res.redirect('/')
}
