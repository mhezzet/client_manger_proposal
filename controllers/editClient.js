import { Client } from '../models'
import mongoose from 'mongoose'

export default async function(req, res) {
  const ObjectId = mongoose.Types.ObjectId.isValid(req.params.id)
  if (!ObjectId) res.send('invalid object id')

  const client = await Client.findOne({ _id: req.params.id })
  if (!client) res.send('no such a client')

  res.render('clientForm', {
    title: 'update client',
    email: req.user.email,
    type: 'update',
    error: '',
    id: req.params.id,
    data: {
      title: client.title,
      description: client.description,
      contactPhone: client.contactPhone,
      contractStartDate: dateFormate(client.contractStartDate),
      contractEndDate: dateFormate(client.contractEndDate)
    }
  })
}

function dateFormate(date) {
  let today = date
  let dd = today.getDate()
  let mm = today.getMonth() + 1 //January is 0!

  let yyyy = today.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = mm + '/' + dd + '/' + yyyy
  return today
}
